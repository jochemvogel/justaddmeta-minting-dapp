import React from "react";
import styles from "../styles/header.module.css";

export const Header = () => {
    return (
        <section>
        <div className={styles.header}>
            <h3 className={styles.brand}>JUSTADDMETA</h3>
            <button className={styles.nav_btn}>Wallet Status</button>
        </div>
    </section>
    );
}
