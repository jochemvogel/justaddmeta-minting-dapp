import React from "react";
import styles from "../styles/mintingInterface.module.css";
import gläserPromo from "../public/img/gläserPromo.png"

export const MintingInterface = ({ amountMinted }) => {
  return (
    <section className={styles.sectionMintingInterface}>
    <div className={styles.container}>
      
        <div className={styles.cardContentWrapper}>
          <div className={styles.cardImageWrapper}>
          <div className={styles.cardImage}>
            <img class="image" src="../public/img/gläserPromo.png" alt=""></img>
          </div>
          </div>
          <div className={styles.cardContent}>
            <h3>Metaverse has never been this delightful</h3>
            <p>
              Remarkable virtual craftsmanship meets ostentatious yet familiar
              design. Ingredients from a different dimension and extravagant
              hints of fruits suiting everyone{"'"}s palate. <br></br>
              <br></br> <strong>Exclusive edition of XX limited edition summer jams in
              three delightful varieties.</strong>
            </p>
            <div className={styles.buttonWrapper}>
            <button className={styles.amountTracker}>{amountMinted}/100</button>
  
            <button className={styles.button}>Mint</button>
            </div>
            </div>
            </div>
    </div>
    
    </section>
  );
}
