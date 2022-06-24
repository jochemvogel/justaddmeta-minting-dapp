import {
  useAddress,
  useNetwork,
  useMetamask,
  useNetworkMismatch,
} from "@thirdweb-dev/react";

import React, { useState, useEffect } from "react";

import Airdrop from "./Airdrop";

import {
  Box,
  Button,
  Text,
  Heading,
  Paragraph,
} from "grommet";
export default function AuthOnly() {
  const connectWithMetamask = useMetamask();
  // Grab the currently connected wallet's address
  const address = useAddress();
  const [mintingStarted, setMintingStarted] = useState(false);

  return (
    <Box align="center" justify="center" background={"black"}>
      {/* <Card
        align="stretch"
        justify="center"
        direction="column"
        pad="large"
        gap="small"
      > */}

      <Box
        align="center"
        justify="center"
        pad="xsmall"
        direction="column"
        gap="small"
      >
        {!address ? (
          <Heading size="small" textAlign="center">
            AUTHORIZED <br></br> ACCESS ONLY
          </Heading>
        ) : (null)}
        {!address && !mintingStarted ? (
          <>
            <Paragraph textAlign="center">
              Connect your wallet to participate in the Alpha Drop.
            </Paragraph>

            <Button
              margin={"medium"}
              label="Connect Wallet"
              size="large"
              color={"white"}
              onClick={() => connectWithMetamask()}
            />
            <Button label="Launch" active={false} disabled size="large" />
          </>
        ) : null}
      </Box>
      <Box
        align="stretch"
        direction="column"
        justify="center"
        pad="small"
        gap="small"
      >
        <Box gap="medium">
          {address && !mintingStarted ? (
            <>
             <Heading size="small" textAlign="center">
            AUTHORIZED <br></br> SUCCESSFULLY
          </Heading> 

          <Paragraph textAlign="center" size="large">
              Now you can participate in the Alpha Drop.
            </Paragraph>

              <Button
                color="white"
                margin="medium"
                size="large"
                active={false}
                // onClick={() => disconnectWallet()}
              >
                <Text
                  size="large"
                  background
                  pad="small"
                  color={"white"}
                  margin="small"
                >
                  {address.slice(0, 4).concat("...").concat(address.slice(-3))}
                </Text>
              </Button>
              <Button
                label="Launch"
                size="large"
                onClick={() => setMintingStarted(true)}
              />
            </>
          ) : null}

          {mintingStarted ? <Airdrop /> : null}
        </Box>
      </Box>
      {/* </Card> */}
    </Box>
  );
}
