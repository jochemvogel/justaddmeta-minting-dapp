import { React, useState } from "react";

import {
  useAddress,
  useNetwork,
  useNetworkMismatch,
  useEditionDrop,
  ChainId,
} from "@thirdweb-dev/react";
import styles from "../styles/mintingInterface.module.css";

// import gläserPromo from "../public/img/gläserPromo.png";

export const MintingInterface = ({ amountMinted, tokenId }) => {
  const address = useAddress();
  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const [mintingComplete, setMintingComplete] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [isClaiming, setIsClaiming] = useState(false);
  const editionDropAddress = "0xB4B8f15C9FF18B01D6894713c2e7712fBE2871Ca";
  const editionDrop = useEditionDrop(editionDropAddress);

  async function mintNFT(tokenId) {
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

    setIsClaiming(true);
    console.log(
      `minting a token for id: ${tokenId} at contract address: ${editionDropAddress}`
    );
    try {
      await editionDrop
        .claim(tokenId, 1)
        .then((result) => setTxHash(result.receipt.transactionHash));

      setJustClaimed(true);

      setIsClaiming(false);
      return;
    } catch (error) {
      console.log(`error on minting., \n ${error}`);
    }
  }

  return (
    <section className={styles.sectionMintingInterface}>
      <div className={styles.container}>
        <div className={styles.cardContentWrapper}>
          <div className={styles.cardImageWrapper}>
            <div className={styles.cardImage}>
              <img
                className={styles.image}
                src="img/gläserPromo.png"
                alt="SUMMERJAM NFTs"
              ></img>
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3>Metaverse has never been this delightful</h3>
            <p>
              Remarkable virtual craftsmanship meets ostentatious yet familiar
              design. Ingredients from a different dimension and extravagant
              hints of fruits suiting everyone{"'"}s palate. <br></br>
              <br></br>{" "}
              <strong>
                Exclusive edition of XX limited edition summer jams in three
                delightful varieties.
              </strong>
            </p>
            <div className={styles.buttonWrapper}>
              <button className={styles.amountTracker}>
                {amountMinted}/100
              </button>

              <button className={styles.button} onClick={() => mintNFT(tokenId)}>Mint</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
