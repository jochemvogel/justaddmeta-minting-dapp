import React from "react";
import styles from "../styles/authcard.module.css";

export default function Authcard() {
  return (
    <div className={styles.container}>
      <div className={styles.authorized}>
        <div className={styles.authorized_content}>
          <h3>
            AUTHORIZED ACCESS ONLY{" "}
          </h3>
          <p>Connect your wallet to participate in the Alpha Drop</p>
          </div>
          <div className={styles.buttonWrapper}>
          <div className={styles.auth_btn1}>
            <button className={styles.button}>Connect Wallet</button>
          </div>
          <div className={styles.auth_btn2}>
            <button className={styles.button}>Launch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
