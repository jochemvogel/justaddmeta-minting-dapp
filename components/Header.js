import React from "react";
import styles from "../styles/header.module.css";
import JustaddmetaLogo from "./JustaddmetaLogo";
import { mdiWalletPlusOutline } from '@mdi/js';

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
              <i className={styles.icon} path={mdiInstagram} title="Instagram" width="24px" height="24px"></i>
              Wallet Connected
            </button>

          </div>
        ) : (
          <div className={styles.navitems}>
                        <button className={styles.button}>
              <i class="x"></i>
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </navigation>
  );
};
