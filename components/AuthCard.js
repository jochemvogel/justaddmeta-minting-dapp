import React from "react";
import styles from "../styles/authcard.module.css";

export  const AuthCard = ()=> {
  return (
    <section className={styles.sectionCard}>
    <div className={styles.container}>
      <div className={styles.authorized}>
        <div className={styles.authorized_content}>
          <h3>
            AUTHORIZED ACCESS ONLY{" "}
          </h3>
          <p>Connect your wallet to participate in the Alpha Drop</p>
          </div>
          <div className={styles.buttonWrapper}>
         
            <button className={styles.button}>Connect Wallet</button>

            <button className={styles.button}>Launch</button>
      
        </div>
      </div>
    </div>
    </section>
  );
}
