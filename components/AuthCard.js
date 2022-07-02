import React from "react";
import styles from "../styles/authcard.module.css";

export default function Authcard() {
  return (
    <div className={styles.container}>
      <div className={styles.authorized}>
        <div className={styles.authorized_content}>
          <h2>
            AUTHORIZED <br></br> ACCESS ONLY{" "}
          </h2>
          <p>Connect your wallet to participate in the Alpha Drop</p>
          <div className={styles.auth_btn1}>
            <button> Connect Wallet</button>
          </div>
          <div className={styles.auth_btn2}>
            <button>Launch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
