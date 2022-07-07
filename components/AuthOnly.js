import { useAddress, useMetamask, useEditionDrop } from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
import TransactionFunnel from "./TransactionFunnel";
// import { Box, Button, Text, Heading, Paragraph } from "grommet";

export default function AuthOnly() {
  const connectWithMetamask = useMetamask();
  // Grab the currently connected wallet's address
  const address = useAddress();
  const [mintingStarted, setMintingStarted] = useState(false);
  const editionDrop = useEditionDrop(
    "0xB4B8f15C9FF18B01D6894713c2e7712fBE2871Ca"
  );

  const [totalMinted, setTotalMinted] = useState(0);
  const [tokenImgUrl, setTokenImgUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const x = await editionDrop.get(1);
      const total = x.supply; // number of minted tokens so far.
      return total.toNumber();
    };
    fetchData()
      .then((data) => setTotalMinted(data))
      .catch(console.error);
  }, []);
  return (
    <Box align="center" direction="row" justify="center">
      <Box align="center" justify="center" direction="column" gap="small">
        {!address ? (
          <>
            <Heading size="small" textAlign="center">
              AUTHORIZED <br></br> ACCESS ONLY
            </Heading>
          </>
        ) : null}
        {!address && !mintingStarted ? (
          <Box style={{ paddingBottom: "24px" }}>
            <Text
              textAlign="center"
              size="16px"
              style={{
                paddingLeft: "46px",
                paddingRight: "46px",
                size: "16px",
              }}
            >
              Connect your wallet to participate <br></br> in the Alpha Drop.
            </Text>

            <Button
              alignSelf="center"
              margin={"medium"}
              // label=""
              size="large"
              style={{ fontStyle: "italic", width: "268px", height: "40px" }}
              color={"white"}
              primary
              onClick={() => connectWithMetamask()}
            >
              Connect Wallet
            </Button>
            <Button
              alignSelf="center"
              style={{ fontStyle: "italic", width: "268px", height: "40px" }}
              color={"white"}
              primary
              active={false}
              disabled
              size="large"
            >
              Launch
            </Button>
          </Box>
        ) : null}
      </Box>
      <Box
        align="stretch"
        direction="column"
        justify="center"
        pad="small"
        gap="small"
      >
        <Box gap="medium" direction="row">
          {address && !mintingStarted ? (
            <>
              <Box
                style={{
                  paddingBottom: "24px",
                  paddingLeft: "64px",
                  paddingRight: "64px",
                  paddingTop: "64px",
                }}
              >
                <Heading size="small" textAlign="center">
                  AUTHORIZED <br></br> SUCCESSFULLY
                </Heading>

                <Paragraph textAlign="center" size="large">
                  Now you can <br></br> participate in the Alpha Drop.
                </Paragraph>

                <Button
                  color="white"
                  margin="medium"
                  size="large"
                  active={false}
                >
                  <Text
                    size="large"
                    background
                    pad="small"
                    color={"white"}
                    margin="small"
                  >
                    {address
                      .slice(0, 4)
                      .concat("...")
                      .concat(address.slice(-3))}
                  </Text>
                </Button>

                <Button
                  alignSelf="center"
                  style={{
                    fontStyle: "italic",
                    width: "268px",
                    height: "40px",
                  }}
                  color={"white"}
                  primary
                  size="large"
                  onClick={() => setMintingStarted(true)}
                >
                  Launch
                </Button>
              </Box>
            </>
          ) : null}

          {mintingStarted ? <TransactionFunnel total={totalMinted} /> : null}
        </Box>
      </Box>
    </Box>
  );
}
