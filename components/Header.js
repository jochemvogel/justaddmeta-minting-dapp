import React from "react";
import styles from "../styles/header.module.css";
import JustaddmetaLogo from "./JustaddmetaLogo";

export const Header = () => {
    return (
        <navigation className={styles.sectionHeader}>
        <div className={styles.headerWrapper}>
            <div className={styles.branding}>
            <span className={styles.brand}>
            <JustaddmetaLogo/>
            </span>
            </div>
            <div className={styles.navitems}>
            <button className={styles.button}>Wallet Status</button>
            </div>
        </div>
    </navigation>
    );
}
