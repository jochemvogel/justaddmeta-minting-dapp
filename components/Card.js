import React from "react";
import styles from "../styles/card.module.css";

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
                                <div className={styles.cardLabel}>

                                </div>
                                <div className={styles.cardText}>
                                    <h3>Phase 1</h3>
                                    <label>Minting Event</label>
                                    <p>Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.cardCol}>
                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.cardLabel}>

                                </div>
                                <div className={styles.cardText}>
                                    <h3>Phase 1</h3>
                                    <label>Minting Event</label>
                                    <p>Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.cardCol}>
                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.cardLabel}>

                                </div>
                                <div className={styles.cardText}>
                                    <h3>Phase 1</h3>
                                    <label>Minting Event</label>
                                    <p>Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.cardCol}>
                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.cardLabel}>

                                </div>
                                <div className={styles.cardText}>
                                    <h3>Phase 1</h3>
                                    <label>Minting Event</label>
                                    <p>Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <div class={styles.itemRowButton}>
                    <button className={styles.button}>Enter Phase 1</button>
                </div>
            </div>

        </section>
    )
}