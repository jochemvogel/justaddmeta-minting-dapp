import { React, useState } from "react";
import styles from "../styles/card.module.css";
import { AuthCard } from "./AuthCard";

export const Card = () => {
  const [enteringPhaseOne, setEnteringPhaseOne] = useState(false);
  const enterPhaseOne = (event) => {
    setEnteringPhaseOne(true);
  };

  return (
    <>
      {enteringPhaseOne ? ( // if entering phase one, we'd render an Auth challenge (wallet connection) 
        <AuthCard />
      ) : (
        <section className={styles.cardsPhases}>
          <div className={styles.cardContainer}>
            <div className={styles.itemRow}>
              <div className={styles.cardCol1}>
                <a onClick={() => enterPhaseOne()}> 
                  <div className={styles.card}>
                    <div className={styles.cardImage}></div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardLabel}></div>
                      <div className={styles.cardText}>
                        <h3>Phase 1</h3>
                        <label>Minting</label>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className={styles.cardCol2}>
                <div className={styles.card}>
                  <div className={styles.cardImage}></div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardLabel}></div>
                    <div className={styles.cardText}>
                      <h3>Phase 2</h3>
                      <label>Physical Good</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardCol3}>
                <div className={styles.card}>
                  <div className={styles.cardImage}></div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardLabel}></div>
                    <div className={styles.cardText}>
                      <h3>Phase 3</h3>
                      <label>Airdrop</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardCol4}>
                <div className={styles.card}>
                  <div className={styles.cardImage}></div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardLabel}></div>
                    <div className={styles.cardText}>
                      <h3>Phase 4</h3>
                      <label>Burn</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
