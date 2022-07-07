import React from "react";
import styles from "../styles/header.module.css";
import JustaddmetaLogo from "./JustaddmetaLogo";
import walletOutline from "./walletOutline";

import {
  useAddress
} from "@thirdweb-dev/react";

export const Header = () => {
  const address = useAddress();

  return (
    <navigation className={styles.sectionHeader}>
      <div className={styles.headerWrapper}>
        <div className={styles.branding}>
          <span className={styles.brand}>
            <JustaddmetaLogo />
          </span>
        </div>

        {/* depending on an existence of a connected wallet address, it shows first or second */}
        {address ? (
          <div className={styles.navitems}>
            <button className={styles.button}>
           <span className={icon}><walletOutline /></span>
           <span className={buttonInner}>Wallet Connected</span>
            </button>

          </div>

        ) : (

          <div className={styles.navitems}>
            <button className={styles.button}>
              <span>Connect Wallet</span>
            </button>
          </div>
        )}

      </div>
    </navigation>

  );
};
