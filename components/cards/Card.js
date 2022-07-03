import React from "react";
import styles from "../../styles/card.module.css";

export default function Card(props) {
    return (
        <section className={styles.cardsPhases}>

            <div class={styles.cardContainer}>

            <div class={styles.itemRow}>
                <div className={styles.cardCol}>1 of 3</div>
                <div className={styles.cardCol}>2 of 3</div>
                <div className={styles.cardCol}>3 of 3</div>
                <div className={styles.cardCol}>4 of 4</div>
            </div>

            </div>
        </section>
    )
}