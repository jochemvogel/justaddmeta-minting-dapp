import React from "react";

import JustaddmetaLogo from "./JustaddmetaLogo";

import styles from "../styles/footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.colLeft}>
          <JustaddmetaLogo />

          <p>
            We enable your brand to <br></br>
            make a sustainable contribution <br></br>
            to the metaverse.
          </p>
          <button className={styles.button}>Enter Safe House</button>
          <div className={styles.socialWrapper}>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-discord"></i>
          </div>
        </div>
        <div className={styles.colRight}>
          <h3>Office Hamburg </h3>
          <p>
            Justaddsugar GmbH <br></br>
            Rothenbaumchaussee 91 <br></br>
            20148 Hamburg, Germany
          </p>
          <a href="tel:+4917634990063">+49 (0) 17634990063</a><br></br>
          <a href="mailto:hello@justaddmeta.com">hello@justaddmeta.com</a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.colLeft}>
          <p>2022 © Justaddsugar - All rights reserved</p>
        </div>
        <div className={styles.colRight}>
          <a href="/impressum" class="footer-legallink">Imprint</a>
          <a href="/privacy-policy" class="footer-legallink">Privacy Policy</a>
        </div>
      </div>
      </div>


    </footer>



  );
};
