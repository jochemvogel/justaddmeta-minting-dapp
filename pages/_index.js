import {
  useAddress,
  useNFTCollection,
  useNetwork,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import SignIn from "../components/SignIn";
import styles from "../styles/Theme.module.css";

import { Box, Card, Heading, Paragraph } from "grommet";

export default function Home() {
  // Grab the currently connected wallet's address
  const address = useAddress();

  // Get the currently authenticated user's session (Next Auth + Discord)
  const { data: session } = useSession();

  // Hooks to enforce the user is on the correct network (Mumbai as declared in _app.js) before minting
  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  // Get the NFT Collection we deployed using thirdweb+
  const nftCollectionContract = useNFTCollection(
    "0xD93bEC957B531Ce2Ea6b86F0132ed8a8ae4ad533"
  );

  // This is simply a client-side check to see if the user is a member of the discord in /api/check-is-in-server
  // We ALSO check on the server-side before providing the signature to mint the NFT in /api/generate-signature
  // This check is to show the user that they are eligible to mint the NFT on the UI.
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (session) {
      setLoading(true);
      // Load the check to see if the user  and store it in state
      // fetch("api/check-is-in-server")
      //   .then((res) => res.json())
      //   .then((d) => {
      //     setData(d || undefined);
      //     setLoading(false);
      //   });

      fetch("api/check-has-role-in-server")
        .then((res) => res.json())
        .then((d) => {
          setData(d || undefined);
          setLoading(false);
        });
    }
  }, [session]);

  // Function to create a signature on the server-side, and use the signature to mint the NFT
  async function mintNft() {
    // Ensure wallet connected
    if (!address) {
      alert("Please connect your wallet to continue.");
      return;
    }

    // Ensure correct network
    if (isOnWrongNetwork) {
      switchNetwork(ChainId.Rinkeby);
      return;
    }

    // Make a request to the API route to generate a signature for us to mint the NFT with
    const signature = await fetch(`/api/generate-signature`, {
      method: "POST",
      body: JSON.stringify({
        // Pass our wallet address (currently connected wallet) as the parameter
        claimerAddress: address,
      }),
    });

    // If the user meets the criteria to have a signature generated, we can use the signature
    // on the client side to mint the NFT from this client's wallet
    if (signature.status === 200) {
      const json = await signature.json();
      const signedPayload = json.signedPayload;
      const nft = await nftCollectionContract?.signature.mint(signedPayload);

      // Show a link to view the NFT they minted
      alert(
        `Success 🔥  Check out your NFT here: https://testnets.opensea.io/assets/rinkeby/0xD93bEC957B531Ce2Ea6b86F0132ed8a8ae4ad533/${nft.id.toNumber()}`
      );
    }
    // If the user does not meet the criteria to have a signature generated, we can show them an error
    else {
      alert("Something went wrong. Are you a member of the discord?");
    }
  }

  return (
    <div>
      <Box background={"black"} direction="row">
        <Box alignSelf="start">
          <Heading color={"white"} margin="medium">
            JUSTADDMETA
          </Heading>
        </Box>
        <Box alignSelf="end">
          <Box
            background={"red"}
            width="xsmall"
            height="xxsmall"
            alignSelf="end"
          ></Box>
          <Box>{"|>"} Alpha Minting @ x.y.22</Box>
        </Box>
        <Box direction="column"></Box>
      </Box>

      <SignIn />
      <hr className={styles.divider} />

      {address && session ? (
        isLoading ? (
          <p>Checking...</p>
        ) : data ? (
          <div className={`${styles.main} ${styles.spacerTop}`}>
            <h3>Hey {session?.user?.name} 👋</h3>
            <h4>
              Thanks for being part of <strong> JUSTADDMETA</strong> family
            </h4>
            <p>here are some nfts you can mint.</p>

            {/* NFT Preview */}
            <div className={styles.nftPreview}>
              <b>Your NFT:</b>
              {/* <img src={session?.user.image} /> */}
              <img src="https://avatars.githubusercontent.com/u/97170049?s=400&u=d0e11ba3c9e71fccddc3c79c65d8d20b7dc27526&v=4" />
              <p>{session.user.name}&apos;s member NFT</p>
            </div>

            <button
              className={`${styles.mainButton} ${styles.spacerTop}`}
              onClick={mintNft}
            >
              Claim NFT
            </button>
          </div>
        ) : (
          <div className={`${styles.main} ${styles.spacerTop}`}>
            <p>Looks like you are not a part of the Discord server.</p>
            <a
              className={styles.mainButton}
              href={`https://discord.gg/gjeyuPVa`}
            >
              Join Server
            </a>
          </div>
        )
      ) : null}
    </div>
  );
}
