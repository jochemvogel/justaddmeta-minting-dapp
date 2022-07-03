import React from "react";
import styles from "../styles/summerjamcard.module.css";

export const SummerJamCard = () => {
  return (
    <section className={styles.sectionMintingInterface}>
    <div className={styles.container}>
      
        <div class={styles.cardContentWrapper}>
          <div class={styles.cardImageWrapper}>
          <div class={styles.cardImage}></div>
          </div>
          <div class={styles.cardContent}>
            <h1>SUMMERJAM</h1>
            <h2>Metaverse has never been this delightful</h2>
            <p>
              Remarkable virtual craftsmanship meets ostentatious yet familiar
              design. Ingredients from a different dimension and extravagant
              hints of fruits suiting everyone's palate. <br></br>
              <br></br> Exclusive edition of XX limited edition summer jams in
              three delightful varieties.
            </p>
            <div class={styles.buttonWrapper}>
            <button className={styles.amountTracker}>0/100</button>
              
            
            <div class={styles.buttonWrapper}>
              <button className={styles.button}>Mint</button>
            </div>
            </div>
            </div>
    </div>
    </div>
    </section>
  );
}
