import styles from "../styles/authcard.module.css";

import {
  useAddress,
  useMetamask,
  useDisconnect,
  useEditionDrop,
} from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
import { Login } from "grommet-icons";
import { MintingInterface } from "./mintingInterface";

export const AuthCard = () => {
  const connectWallet = useMetamask();
  const disconnectWallet = useDisconnect();
  const totalSupply = 110;

  // Grab the currently connected wallet's address
  const address = useAddress();
  const [mintingStarted, setMintingStarted] = useState(false);
  const editionDrop = useEditionDrop(
    "0xB4B8f15C9FF18B01D6894713c2e7712fBE2871Ca"
  );

  const [totalMinted, setTotalMinted] = useState(0);

  // generate a random token id (among 3 tokens)
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  const getCurrentAmount = async (tokenId) => {
    try {
      const x = await editionDrop.get(tokenId);
      const total = x.supply; //
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetch number of minted tokens so far..
    // if all minted for that id, get another random number.
    const fetchData = async (randomTokenId) => {
      const currentAmount = await getCurrentAmount(randomTokenId);
      if (currentAmount < totalSupply) {
        return currentAmount.toNumber();
      } else {
        return fetchData(getRandomNumber());
      }
    };
    fetchData(getRandomNumber())
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
                  onClick={() => disconnectWallet()}
                  className={styles.button}
                >
                  Wallet Connected
                </button>

                <button
                  onClick={() => setMintingStarted(true)}
                  className={styles.button}
                >
                  Launch
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}

      {!address && !mintingStarted ? (
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

                <button disabled className={styles.button}>
                  Launch
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {mintingStarted ? <MintingInterface amountMinted={totalMinted} /> : null}
    </>
  );
};
