import styles from "../styles/authcard.module.css";

import { useAddress, useMetamask, useDisconnect, useEditionDrop } from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
import { Login } from "grommet-icons";
import { MintingInterface } from "./mintingInterface";

export const AuthCard = () => {
  const connectWallet = useMetamask();
  const disconnectWallet = useDisconnect();

  // Grab the currently connected wallet's address
  const address = useAddress();
  const [mintingStarted, setMintingStarted] = useState(false);
  const editionDrop = useEditionDrop(
    "0xB4B8f15C9FF18B01D6894713c2e7712fBE2871Ca"
  );

  const [loggedIn, setLoggedIn] = useState(false);
  const [totalMinted, setTotalMinted] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const x = await editionDrop.get(1);
      const total = x.supply; // number of minted tokens so far.
      return total.toNumber();
    };
    fetchData()
      .then((total) => setTotalMinted(total))
      .catch(console.error);
  }, []);

  return (
    <>
      {address && !mintingStarted ? (
        <section className={styles.sectionCard}>
          <div className={styles.container}>
            <div className={styles.authorized}>
              <div className={styles.authorized_content}>
                <h3>AUTHORIZED SUCCESSFULLY </h3>
                <p>
                  {address.slice(0, 4).concat("...").concat(address.slice(-3))}
                </p>
              </div>

              <div className={styles.buttonWrapper}>
                <button
                  onClick={()=> disconnectWallet()}
                  className={styles.button}
                >
                  Wallet Connected
                </button>

                <button onClick={()=> setMintingStarted(true)} className={styles.button}>Launch</button>
              </div>
            </div>
          </div>
        </section>
      ) : <></>}

      {!address&& !mintingStarted ? (
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
                onClick={() => connectWallet()}
              >
                Connect Wallet
              </button>

              <button disabled className={styles.button}>Launch</button>
            </div>
          </div>
        </div>
      </section>
      ): null}

      {mintingStarted ? <MintingInterface total={totalMinted} /> : null}
    </>
  );
};
