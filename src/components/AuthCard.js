import React, { useState, useEffect } from 'react';

import {
  useAddress,
  useMetamask,
  useDisconnect,
  useEditionDrop
} from '@thirdweb-dev/react';

import MintingInterface from 'components/MintingInterface';

import styles from 'styles/modules/auth-card.module.css';

export default function AuthCard() {
  const connectWallet = useMetamask();
  const disconnectWallet = useDisconnect();
  const totalSupply = 110;

  // Grab the currently connected wallet's address
  const address = useAddress();
  const [mintingStarted, setMintingStarted] = useState(false);
  const [tokenToMint, setTokenToMint] = useState(null);
  const editionDrop = useEditionDrop(
    '0xB4B8f15C9FF18B01D6894713c2e7712fBE2871Ca'
  );

  const [totalMinted, setTotalMinted] = useState(0);

  // generate a random token id;
  // among three tokens, ids as 0, 1 or 2.
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  const getCurrentAmount = async (tokenId) => {
    try {
      const x = await editionDrop.get(tokenId);
      const total = x.supply; //
      console.log(`tokenId: ${tokenId} total minted ${total}`);
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetch number of minted tokens so far.
    // if all minted for that id, check another token via calling the function with a new random id
    // REFACTOR: use memoization (keep track of tried/failed tokens so far, not call it
    const fetchData = async (randomTokenId) => {
      const currentAmount = await getCurrentAmount(randomTokenId);
      if (currentAmount < totalSupply) {
        console.log(`setting token to mint: ${randomTokenId}`);
        setTokenToMint(randomTokenId);
        return currentAmount.toNumber();
      } else {
        return fetchData(getRandomNumber());
      }
    };

    // call the recursive function defined above.
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
              </div>

              <div className={styles.buttonWrapper}>
                <button
                  onClick={() => disconnectWallet()}
                  className={styles.buttonWallet}
                >
                  {address.slice(0, 4).concat('...').concat(address.slice(-3))}
                </button>

                <button
                  onClick={() => setMintingStarted(true)}
                  className={styles.buttonConnect}
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
                <h3>
                  AUTHORIZED<br></br> ACCESS ONLY{' '}
                </h3>
                <p>Connect your wallet to participate.</p>
              </div>
              <div className={styles.buttonWrapper}>
                <button
                  className={styles.buttonConnect}
                  onClick={() => connectWallet()}
                >
                  Connect Wallet
                </button>

                <button disabled className={styles.buttonLaunch}>
                  Launch
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {mintingStarted ? (
        <MintingInterface amountMinted={totalMinted} tokenId={tokenToMint} />
      ) : null}
    </>
  );
}
