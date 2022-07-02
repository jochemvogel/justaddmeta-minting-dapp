import React from "react";
import styles from "../styles/summerjamcard.module.css";

export const SummerJamCard = () => {
  return (
    <div className={styles.container}>
      <div class={styles.summerjam}>
        <div class={styles.summerjam_card}>
          <div class={styles.metaverse_img}></div>

          <div class={styles.metaverse_content}>
            <h1>SUMMERJAM</h1>
            <h2>Metaverse has never been this delightful</h2>
            <p>
              Remarkable virtual craftsmanship meets ostentatious yet familiar
              design. Ingredients from a different dimension and extravagant
              hints of fruits suiting everyone's palate. <br></br>
              <br></br> Exclusive edition of XX limited edition summer jams in
              three delightful varieties.
            </p>
            <div class={styles.metaverse_btn1}>
              <button>10/50</button>
            </div>
            <div class={styles.meta_btn2}>
              <button>Mint</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
