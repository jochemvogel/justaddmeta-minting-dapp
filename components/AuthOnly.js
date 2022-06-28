import { useAddress, useMetamask, useEditionDrop } from "@thirdweb-dev/react";

import React, { useState, useEffect } from "react";

import Airdrop from "./Airdrop";

import { Box, Image, Button, Text, Heading, Paragraph } from "grommet";

export default function AuthOnly() {
  const connectWithMetamask = useMetamask();
  // Grab the currently connected wallet's address
  const address = useAddress();
  const [mintingStarted, setMintingStarted] = useState(false);
  const editionDrop = useEditionDrop(
    "0xB4B8f15C9FF18B01D6894713c2e7712fBE2871Ca"
  );

  const [to, setTo] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const x = await editionDrop.get(1);
      const total = x.supply;
      return total.toNumber();
    };
    fetchData()
      .then((data) => setTo(data))
      .catch(console.error);
  }, []);

  // const tokenStat = await getTokenStats(1);
  // const totalSofar = tokenStat.toNumber();

  return (
    <Box
      align="center"
      direction="row"
      justify="center"

      // style={{
      //   background:
      //     "linear-gradient(113.53deg, rgba(255, 255, 255, 0.16) 0.04%, rgba(255, 255, 255, 0) 101.07%)",
      //   filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      // }}
    >
      {/* {!mintingStarted ? (
        <Image
          src="https://i.imgur.com/48dRmwN.png"
          width={"460px"}
          height={"500px"}
        ></Image>
      ) : null} */}

      <Box
        align="center"
        justify="center"
        direction="column"
        gap="small"
        style={{
          background:
            "linear-gradient(113.53deg, rgba(255, 255, 255, 0.16) 0.04%, rgba(255, 255, 255, 0) 101.07%)",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
      >
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
                  paddingLeft:"64px",
                  paddingRight:"64px",
                  paddingTop:"64px",

                  background:
                    "linear-gradient(113.53deg, rgba(255, 255, 255, 0.16) 0.04%, rgba(255, 255, 255, 0) 101.07%)",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
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
                  // onClick={() => disconnectWallet()}
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

                {/* <Button
                  label="Launch"
                  color={"white"}
                  primary
                  size="large"
                  onClick={() => setMintingStarted(true)}
                >
                  Launch
                </Button> */}
              </Box>
            </>
          ) : null}

          {mintingStarted ? <Airdrop total={to} /> : null}
        </Box>
      </Box>
    </Box>
  );
}
