import React from "react";
import emailOutline from "./icons/emailOutline.svg";
import JustaddmetaLogo from "./JustaddmetaLogo";
import Link from "next/link";

import styles from "../styles/footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerBranding}>
        <div className={styles.wrapperContent}>
          <div className={styles.colLeft}>
            <div className={styles.branding}><JustaddmetaLogo /></div>
            <p>
              We enable your brand to <br></br>
              make a sustainable contribution <br></br>
              to the metaverse.
            </p>
            <button className={styles.button}>Enter Safe House</button>
            <div className={styles.socialWrapper}>
              <i className={styles.socialIcon}><instagramOutline /></i>
              <i className={styles.socialIcon}><tiktokOutline /></i>
              <i className={styles.socialIcon}><discordOutline /></i>
            </div>
          </div>
          <div className={styles.colRightContent}>
            <h3>Office Hamburg </h3>
            <p>
              Justaddsugar GmbH <br></br>
              Rothenbaumchaussee 91 <br></br>
              20148 Hamburg, Germany
            </p>
            <a href="tel:+4917634990063">
              <i className="iconPhone"><phoneOutine /></i>
              <span className="buttonInner">+49 (0) 17634990063</span>
            </a>
            <a href="mailto:hello@justaddmeta.com">
              <i className={styles.iconPhone}><emailOutline /></i>
              <span className={styles.buttonInner}>hello@justaddmeta.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.containerLegal}>
        <div className={styles.wrapperRights}>
          <div className={styles.colLeftRights}>
            <p>2022 © Justaddsugar - All rights reserved</p>
          </div>
          <div className={styles.colRightLegal}>
            <Link href="/">Imprint</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>


    </footer>




  );
};
