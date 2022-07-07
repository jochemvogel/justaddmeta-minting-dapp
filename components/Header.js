import React from "react";
import styles from "../styles/header.module.css";
import JustaddmetaLogo from "./icons/JustaddmetaLogo";
import walletOutline from "./icons/walletOutline";
import walletPlusOutline from "./icons/walletPlusOutline";




import {
  useAddress
} from "@thirdweb-dev/react";

export const Header = () => {
  const address = useAddress();

  return (
    <navigation className={styles.sectionHeader}>
      <div className={styles.headerWrapper}>
        <div className={styles.branding}>
          <a href="">
            <JustaddmetaLogo className={styles.brand}/>
            </a>
        </div>

        {/* depending on an existence of a connected wallet address, it shows first or second */}
        {address ? (
          <div className={styles.navitems}>
            <button className={styles.button}>
              <walletOutline className={styles.icon} />
              <span>Wallet Connected</span>
            </button>

          </div>

        ) : (

          <div className={styles.navitems}>
            <button className={styles.button}>
            <walletPlusOutline className={styles.icon} />
              <span>Connect Wallet</span>
            </button>
          </div>
        )}

      </div>
    </navigation>

  );
};
