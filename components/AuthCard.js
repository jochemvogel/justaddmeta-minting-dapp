import styles from "../styles/authcard.module.css";

import { useAddress, useMetamask, useEditionDrop } from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";

export const AuthCard = () => {
  const connectWithMetamask = useMetamask();
  // Grab the currently connected wallet's address
  const address = useAddress();
  const [mintingStarted, setMintingStarted] = useState(false);
  const editionDrop = useEditionDrop(
    "0xB4B8f15C9FF18B01D6894713c2e7712fBE2871Ca"
  );

  const [totalMinted, setTotalMinted] = useState(0);
  
  return (
    <section className={styles.sectionCard}>
      <div className={styles.container}>
        <div className={styles.authorized}>
          <div className={styles.authorized_content}>
            <h3>AUTHORIZED ACCESS ONLY </h3>
            <p>Connect your wallet to participate in the Alpha Drop</p>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              className={styles.button}
              onClick={() => connectWithMetamask()}
            >
              Connect Wallet
            </button>

            <button className={styles.button}>Launch</button>
          </div>
        </div>
      </div>
    </section>
  );
};
