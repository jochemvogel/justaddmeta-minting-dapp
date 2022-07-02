import React from "react";
import styles from "../../styles/card.module.css";

export default function Card(props) {
    return (
        <section className={styles.cardsList}>
            <div className={props.theme}>
                <div className={props.themeContent} >
                    <h1>{props.title}</h1>
                    <h3>{props.heading}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </section>
    )
}