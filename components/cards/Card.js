import React from "react";
import styles from "../../styles/card.module.css";

export default function Card(props) {
    return (
        <section className={styles.cardsPhases}>

            <div class={styles.cardContainer}>

            <div class={styles.itemRow}>
                <div className={styles.cardCol}>
                <div className={styles.card}>
                <div className={styles.cardImage}>
                </div>
                <div className={styles.cardBody}>
                <div className={styles.cardTitle}>
                    <span>Card Title</span>
                    </div>
                    <div className={styles.cardText}>
                    <span>Some quick example text to build on the card title and make up the bulk of
      the card's content.</span>
                    </div>
                    <button className={styles.button}>Enter Phase 1</button>
                </div>
                </div>
                </div>
                <div className={styles.cardCol}>2 of 3</div>
                <div className={styles.cardCol}>3 of 3</div>
                <div className={styles.cardCol}>4 of 4</div>
            

            </div>
            
            </div>

        </section>
    )
}