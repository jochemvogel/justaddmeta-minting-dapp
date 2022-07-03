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
            <label class={styles.label}>
            <div class={styles.cardIcon}>
              
            </div>
            <div class={styles.cardContent}>SUMMERJAM</div>
         
            </label>
        
            <h1>Metaverse has never been this delightful</h1>
            <p>
              Remarkable virtual craftsmanship meets ostentatious yet familiar
              design. Ingredients from a different dimension and extravagant
              hints of fruits suiting everyone's palate. <br></br>
              <br></br> <strong>Exclusive edition of XX limited edition summer jams in
              three delightful varieties.</strong>
            </p>

            <button className={styles.amountTracker}>0/100</button>


            
            <button className={styles.button}>Mint</button>
            </div>
            </div>
    </div>
    
    </section>
  );
}
