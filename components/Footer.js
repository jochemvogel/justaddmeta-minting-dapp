import React from "react";
import { Box, Text, Footer, Anchor, Button } from "grommet";
import { Instagram } from "grommet-icons";
import JustaddmetaLogo from "./JustaddmetaLogo";

import styles from "../styles/footer.module.css";
export const AlphaFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_items}>
        <div className={styles.footer_info}>
          <JustaddmetaLogo/>
          <br></br>
          <p>
            We enable your brand to <br></br>
            make a sustainable contribution <br></br>
            to the metaverse.
          </p>
          <button className={styles.footer_btn}>ENTER SAFE HOUSE</button>
          <div className={styles.social_media}>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-discord"></i>
          </div>
        </div>
        <div className={styles.address}>
          <h2>Office Hamburg </h2>
          <p>
            Justaddsugar GmbH <br></br>
            Rothenbaumchaussee 91 <br></br>
            20148 Hamburg, Germany
          </p>
          <a href=""> +49 17634990063</a> <br></br>
          <a href="mailto:hello@justaddmeta.com">hello@justaddmeta.com</a>
        </div>
      </div>
      <div className={styles.term_condition}>
        <a href="">2022 © Justaddsugar - All rights reserved.</a>
      </div>
    </footer>

  );
};
