import React from "react";
import styles from "../styles/summerjamcard.module.css";

export const MintingInterface = () => {
  return (
    <section className={styles.sectionMintingInterface}>
    <div className={styles.container}>
      
        <div className={styles.cardContentWrapper}>
          <div className={styles.cardImageWrapper}>
          <div className={styles.cardImage}></div>
          </div>
          <div className={styles.cardContent}>
            <label className={styles.label}>
            <div className={styles.cardIcon}>
              
            </div>
            <div className={styles.cardContent}>SUMMERJAM</div>
         
            </label>
        
            <h1>Metaverse has never been this delightful</h1>
            <p>
              Remarkable virtual craftsmanship meets ostentatious yet familiar
              design. Ingredients from a different dimension and extravagant
              hints of fruits suiting everyone's palate. <br></br>
              <br></br> <strong>Exclusive edition of XX limited edition summer jams in
              three delightful varieties.</strong>
            </p>
            <div className={styles.buttonWrapper}>
            <button className={styles.amountTracker}>0/100</button>


            
            <button className={styles.button}>Mint</button>
            </div>
            </div>
            </div>
    </div>
    
    </section>
  );
}
