import styles from "../styles/authcard.module.css";

import React, { useState, useEffect } from "react";
import CheckItOut from "./Checkout";
import { Button } from "grommet";

export const MintingProgress = ({ tokenId, progress }) => {
  // until the transactions on metamask complete, we'll display a spinner,
  // depending on the process, display minting success/fail
  // it will display in case of success or fail of a mint.
  // TODO:// if transaction is cancelled, then head back to minting interface.

  console.log(`progress.tokenId: ${progress.tokenId}`);
  console.log(`progress.txHash: ${progress.txHash}`);
  console.log(`progress.txHash: ${progress.txHash}`);

  // TODO:// call checkout here with an onClick function for the <continue> button.
  return (
    <>
      <section className={styles.sectionCard}>
        <div className={styles.container}>
          <div className={styles.authorized}>
            <div className={styles.authorized_content}>
              <h3>follow steps </h3>
            </div>
            <div className={styles.buttonWrapper}>
              {progress.txStatus === "IN_PROGRESS" ? (
                <>
                  <h1>in progress..</h1>
                </>
              ) : null}

              {progress.txStatus === "SUCCESS" ? (
                <>
                  <h1>success</h1>
                  <button
                    className={styles.buttonConnect}
                  >
                    Continue
                  </button>
                </>
              ) : null}

              {progress.txStatus === "FAIL" ? (
                <>
                  <h1>fail</h1>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
