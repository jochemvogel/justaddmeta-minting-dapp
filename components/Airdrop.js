import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Heading,
  Text,
  Button,
  Notification,
  Spinner,
  Paragraph,
  Image,
  CardBody,
  CardFooter,
  CardHeader,
  Anchor,
} from "grommet";
import {
  useAddress,
  useNetwork,
  useMetamask,
  useNetworkMismatch,
  useEditionDrop,
  ChainId,
} from "@thirdweb-dev/react";

import { StatusGood, Validate } from "grommet-icons";
import Checkout from "./Checkout";

export default function Airdrop({ total }) {
  const maxSupply = 1000; // for testing
  const connectWithMetamask = useMetamask();
  // const { data: session } = useSession();
  const address = useAddress();

  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const editionDrop = useEditionDrop(
    "0xB4B8f15C9FF18B01D6894713c2e7712fBE2871Ca"
  );
  const [isClaiming, setIsClaiming] = useState(false);
  const [justClaimed, setJustClaimed] = useState(false); // so we can show -mint another- instead -mint- text on button.
  // const [amount, setAmount] = useState(1); // max mint amount at a time, default 1
  const [totalMinted, setTotalMinted] = useState(total);
  const [claimFailed, setClaimFailed] = useState(false);
  const [mintingComplete, setMintingComplete] = useState(false);
  const [txHash, setTxHash] = useState("");
  const configClaimPhases = async () => {
    const saleStartTime = new Date();

    let tokenId = null;
    const claimConditionsJAM0 = [
      {
        startTime: saleStartTime, // start the presale now
        maxQuantity: 1000, // limit how many mints for this test minting. for now it's 250 @ rinkeby.
        price: 0, // sale price
        snapshot: [
          "0xF2Bb8DCD9c246c03a42b029942DDD92Dd0Ea2302",
          "0xfac0475b677b54f72682E0EA633Ffa1088110dcf",
          "0xeA718966A209c5244D8Ad686560a97F29381a84F",
        ], // limit minting to only certain addresses
      },
    ];

    tokenId = 0; // the id of the NFT to set claim conditions on
    await editionDrop.claimConditions.set(tokenId, claimConditionsJAM0);

    const claimConditionsJAM1 = [
      {
        startTime: saleStartTime, // start the presale now
        maxQuantity: 1000, // limit how many mints for this test minting. for now it's 250 @ rinkeby.
        price: 0, // sale price
        snapshot: [
          "0xF2Bb8DCD9c246c03a42b029942DDD92Dd0Ea2302",
          "0xfac0475b677b54f72682E0EA633Ffa1088110dcf",
          "0xeA718966A209c5244D8Ad686560a97F29381a84F",
          "0x240d0a6aEFbFb5e188BdC2Ab4Bf685a9a5aA5EDD",
        ], // limit minting to only certain addresses
      },
    ];

    tokenId = 1;
    await editionDrop.claimConditions.set(tokenId, claimConditionsJAM1);
  };

  // async function newMintStat(wallet_address, token_id, order_in_minting) {
  //   console.log("getting the total minted count ..")

  //   let x = await getTotalMintedCount();
  //   console.log(`adding MintStat, order_in_minting: ${order_in_minting}
  //   \n total_minted_count: ${JSON.stringify(x)} >> `)
  //   addMintStat(wallet_address, token_id, order_in_minting);
  // }

  // const getTotalMinted = async() => {
  //   const total  = await editionDrop.getTotalCount(); //ContractEvents
  //   console.log(`number of tokens : ${total}`)
  //   return total;
  // }

  const checkThisOut = (etherscanURL) => {
    return (
      <Card>
        <CardHeader>Checkout</CardHeader>
        <CardBody>
          <Box direction="row">
            <Box width={"50%"}>
              <Image width={"400px"} height="600px"></Image>
            </Box>
            <Box width={"50%"} direction="column">
              <Text size="large">You sucessfully minted ...</Text>
              <Button
                size="large"
                primary
                color={"white"}
                href={{ etherscanURL }}
                target="_blank"
              >
                fetch Etherscan link
              </Button>
              <Button size="large" color={"white"}>
                fetch Opensea link
              </Button>
            </Box>
          </Box>
        </CardBody>
      </Card>
    );
  };

  async function claimNFT(tokenId) {
    // Ensure wallet connected
    if (!address) {
      alert("Please reconnect your wallet to continue.");
      return;
    }

    // Ensure correct network
    if (isOnWrongNetwork) {
      switchNetwork(ChainId.Rinkeby);
      return;
    }

    // just once, from time to time. just run it locally,
    // !! unless updates not needed or it's nnever leave uncommented.
    // await configClaimPhases();
    // we'll only run it via code (here, for now @ minting phase for convenience.)
    // keeping here until we develop our dashboard to make those configurations without touching the source code.

    // restrict claiming only one ERC1155 token at a time. The amount is configured by us.
    // for now, keeping textInput below and amount @ useState commented. we'll extract them to components later.

    if (totalMinted < maxSupply) {
      setIsClaiming(true);
      // actually 3, we'll make this 3 after updating metadata for all NFTs.
      // const numberOfDesigns = 2;
      // const randomTokenId = Math.floor(Math.random() * numberOfDesigns);
      const randomTokenId = Math.floor(Math.random()); // and int btw 0 to 1.
      console.log(`got randomg tokenId btw 0 and 1: ${randomTokenId}`);
      try {
        // const tokenClaimingResult = await editionDrop.claimTo(address, randomTokenId, 1);


        await editionDrop.claimTo(address, randomTokenId, 1).then((result) => setTxHash(result.receipt.transactionHash));
          // .then((result) => setTxHash(result["receipt"]["transactionHash"]));

        //tokenClaimingResult["receipt"]["transactionHash"];
        //console.log(`txHash >> ${tx}`);
        
        // console.log(`txHash >> ${JSON.stringify(tokenClaimingResult["receipt"]["transactionHash"])}`);
        // setTxHash(tx);
        setJustClaimed(true);
        // setTotalMinted(total + 1);
        // setDisplayInfoToast(true);
      } catch (error) {
        console.log(`error on claiming., \n ${error}`);
      }
      setIsClaiming(false);
    }
  }

  return (
    <Box
      fill="vertical"
      // overflow="auto"
      align="center"
      flex="grow"
      pad="medium"
      justify="center"
      direction="column"
      // align="stretch"
      gap="xxsmall"
      style={{
        background:
          "linear-gradient(113.53deg, rgba(255, 255, 255, 0.16) 0.04%, rgba(255, 255, 255, 0) 101.07%)",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      }}
    >
      {address && !isClaiming && !justClaimed ? (
        <Box direction="row">
          <Box
            width={"50%"}
            // background="black"
            justify="center"
            align="start"
            pad={"32px"}
          >
            <Image
              src="https://i.imgur.com/mSBSyOz.png"
              width={"460px"}
              height={"500px"}
            />
          </Box>

          <Box
            width={"50%"}
            // background="black"
            justify="center"
            align="end"
            pad={"32px"}
          >
            <Box direction="row" gap="medium" alignSelf="start" pad={"small"}>
              <Text alignSelf="start" size="large">
                SUMMERJAM
              </Text>
              <Validate size="medium" />
            </Box>
            <Heading textAlign="start" size="small">
              Metaverse has never been this delightful
            </Heading>
            <Paragraph textAlign="start" size="large">
              Remarkable virtual craftsmanship meets ostentatious yet familiar
              design. Ingredients from a different dimension and extravagant
              hints of fruits suiting everyone&apos;s palate.
            </Paragraph>

            <Paragraph textAlign="start" size="large">
              Exclusive limited edition of 50 summer jams in three delightful
              varieties.
            </Paragraph>

            <Paragraph
              alignSelf="center"
              textAlign="center"
              size="large"
              margin={"small"}
            >
              {totalMinted}/X minted
            </Paragraph>

            <Box size="small" margin={"small"} alignSelf="center">
              <Button
                alignSelf="center"
                style={{
                  fontStyle: "italic",
                  width: "342px",
                  height: "40px",
                }}
                primary
                color="white"
                size="large"
                disabled={false}
                onClick={() => claimNFT(1)}
              >
                Mint
              </Button>
            </Box>
          </Box>
        </Box>
      ) : null}
      {isClaiming ? (
        <Box
          direction="column"
          gap="large"
          margin={"medium"}
          style={{ height: "218px", width: "352px" }}
        >
          <Box height={"70px"} width="320px">
            <Text weight={"bold"} style={{ size: "32px", color: "#FFFFFF" }}>
              Follow steps
            </Text>
          </Box>

          <Box direction="row" gap="small" size="large" alignSelf="center">
            <Spinner
              style={{ width: "16px", height: "16px" }}
              color="#DCDCDC"
              alignSelf="center"
            />
            <Text alignSelf="center" weight={"bold"} style={{ size: "12px" }}>
              {" "}
              sign transaction
            </Text>
          </Box>
          <Box margin={"small"} width="small" alignSelf="center">
            <Button
              alignSelf="center"
              style={{
                width: "320px",
                height: "40px",
                color: "black",
                fontStyle: "italic",
                background: "rgba(255, 255, 255, 0.64)",
                fontWeight: "700",
              }}
              size="small"
              color={"white"}
              primary
              // active="false"
              disabled
            >
              Continue
            </Button>
          </Box>
        </Box>
      ) : (
        <></>
      )}


      {!isClaiming && justClaimed && !mintingComplete ? (
        <>
          <Box direction="row" gap="medium" alignSelf="center" pad={"small"}>
            <Text alignSelf="start" size="large" weight={"bold"}>
              SUMMERJAM
            </Text>
            <Validate size="medium" />
          </Box>

          <Box direction="column">
            {/* <Text style={{ size: "32px" }}>Follow steps</Text> */}
            <Box direction="row" gap="small" size="large" margin={"small"}>
              <StatusGood
                style={{ width: "24px", height: "24px" }}
                alignSelf="center"
              />
              <Text style={{ size: "12px", fontWeight: "700" }}>
                {" "}
                sign transaction{" "}
              </Text>
            </Box>
            <Box margin={"small"} width="small" alignSelf="center">
              <Button
                style={{ fontStyle: "italic", width: "320px", height: "40px" }}
                size="large"
                primary
                color={"white"}
                onClick={() => setMintingComplete(true)}
                // onClick={() => console.log(`Continue button getting from txHash state >> ${txHash}`)}

              >
                Continue
              </Button>
            </Box>
          </Box>
        </>
      ) : 
      null
      }
          {mintingComplete ? <Checkout txHash={txHash.toString()} /> : null}

      
    </Box>
  );
}
