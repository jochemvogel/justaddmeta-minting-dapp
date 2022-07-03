import React from "react";

import JustaddmetaLogo from "./JustaddmetaLogo";

import styles from "../styles/footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_items}>
        <div className={styles.footer_info}>
          <JustaddmetaLogo />

          <p>
            We enable your brand to <br></br>
            make a sustainable contribution <br></br>
            to the metaverse.
          </p>
          <button className={styles.button}>Enter Safe House</button>
          <div className={styles.social_media}>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-discord"></i>
          </div>
        </div>
        <div className={styles.address}>
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
      <div className={styles.term_condition}>
        <p>2022 © Justaddsugar - All rights reserved.</p>
      </div>
    </footer>



  );
};
