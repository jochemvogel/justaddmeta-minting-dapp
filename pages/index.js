import {
  useAddress,
  useDisconnect,
  useMetamask,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
import { AlphaFooter, Footer } from "../components/Footer";

import AuthOnly from "../components/AuthOnly";

import {
  Image,
  Box,
  Button,
  Card,
  Text,
  Heading,
  Paragraph,
  Anchor
} from "grommet";
import { Car } from "grommet-icons";
import JustaddmetaLogo from "../components/JustaddmetaLogo";
import { HeroBanner } from "../components/HeroBanner";
import { SummerJamCard } from "../components/SummerJamCard";
import { Header } from "../components/Header";
import {Wrapper} from "../components/Wrapper";
// import { TransactionFunnel } from "../components/TransactionFunnel";

export default function Home() {
  // Grab the currently connected wallet's address
  const address = useAddress();
  const isOnWrongNetwork = useNetworkMismatch();
  const connectWallet = useMetamask();
  const disconnectWallet = useDisconnect();
  const [authStarted, setAuthStarted] = useState(false);

  const ImageStripe = () => {
    return (
      <Box
        direction="column"
        gap="large"
        background={"black"}
        alignSelf="center"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <Box
          gap="4%"
          background={"black"}
          direction="row"
          width={"100%"}

          // style={{ paddingLeft: "20%", paddingRight: "20%" }}
        >
          <Card width={"20%"} background="white" border="all">
            <Box background={"white"} direction="column">
              <Image
                src="https://i.imgur.com/rSAdvq6.jpg"
                width={"100%"}
                height={"280px"}
              ></Image>
              <Box pad={"24px"}>
                <Heading textAlign="start" size="24px">
                  PHASE 1
                </Heading>
                <Text size="12px" textAlign="start" weight={"700"}>
                  MINTING EVENT
                </Text>
                <Paragraph textAlign="start" size="12px">
                  Lorem ipsum dolor sit amet, consectetur adispicit elit.
                </Paragraph>
              </Box>
            </Box>
          </Card>
          <Card width={"20%"} background="#DCDCDC" border="all">
            <Box background="#DCDCDC" direction="column">
              <Image
                src="https://i.imgur.com/48dRmwN.png"
                width={"100%"}
                height={"280px"}
              ></Image>
              <Box pad={"24px"}>
                <Heading textAlign="start" size="24px">
                  PHASE 2
                </Heading>
                <Text size="12px" textAlign="start" weight={"700"}>
                  CLAIM PRODUCT
                </Text>
                <Paragraph textAlign="start" size="12px">
                  Lorem ipsum dolor sit amet, consectetur adispicit elit.
                </Paragraph>
              </Box>
            </Box>
          </Card>
          <Card width={"20%"} background="#DCDCDC" border="all">
            <Box background="#DCDCDC" direction="column">
              <Image
                src="https://i.imgur.com/48dRmwN.png"
                width={"100%"}
                height={"280px"}
              ></Image>
              <Box pad={"24px"}>
                <Heading textAlign="start" size="24px">
                  PHASE 3
                </Heading>
                <Text size="12px" textAlign="start" weight={"700"}>
                  TransactionFunnel
                </Text>
                <Paragraph textAlign="start" size="12px">
                  Lorem ipsum dolor sit amet, consectetur adispicit elit.
                </Paragraph>
              </Box>
            </Box>
          </Card>
          <Card width={"20%"} background="white" border="all">
            <Box background="#DCDCDC" direction="column">
              <Image
                src="https://i.imgur.com/48dRmwN.png"
                width={"100%"}
                height={"280px"}
              ></Image>
              <Box pad={"24px"}>
                <Heading textAlign="start" size="24px">
                  PHASE 4
                </Heading>
                <Text size="12px" textAlign="start" weight={"700"}>
                  BURN
                </Text>
                <Paragraph textAlign="start" size="12px">
                  Lorem ipsum dolor sit amet, consectetur adispicit elit.
                </Paragraph>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* BUTTON WAS HERE */}
        <Button
          alignSelf="center"
          style={{ fontStyle: "italic", width: "200px", height: "40px" }}
          primary
          color="white"
          size="large"
          width="100px"
          onClick={() => setAuthStarted(true)}
        >
          Enter Phase 1
        </Button>
      </Box>
    );
  };

  const NavBar = () => {
    //     return(

    //     <section>
    //     <div className="header">
    //         <h3 className="brand">JUSTADDMETA</h3>
    //         <button className="nav_btn">Wallet Status</button>
    //     </div>
    // </section>
    //     );

    return (
      <Box
        style={{ position: "fixed" }}
        fill="horizontal"
        overflow="auto"
        align="stretch"
        flex="grow"
        responsive
      >
        <Box
          // height={"0%"}
          align="center"
          justify="between"
          direction="row"
          pad="small"
          // basis="xsmall"
          background={"black"}
        >
          <Box
            height={"xxsmall"}
            // align="stretch"
            justify="start"
            direction="row"
          >
            <Button href="/" alignSelf="start">
              <JustaddmetaLogo
                style={{ marginLeft: "120px", marginTop: "11px" }}
                width="150px"
                height="18px"
              />
            </Button>
          </Box>

          <Box align="center" style={{ marginRight: "120px" }}>
            {address ? (
              <Button
                style={{ fontStyle: "italic", width: "200px", height: "40px" }}
                color={"white"}
                onClick={() => disconnectWallet()}
                size="large"
                primary
              >
                connected
              </Button>
            ) : (
              <Button
                style={{ fontStyle: "italic", width: "200px", height: "40px" }}
                color={"white"}
                // size="large"
                primary
                onClick={() => connectWallet()}
              >
                not connected
              </Button>
            )}
          </Box>

          {/* <Button color={"white"} >connect discord</Button> */}
        </Box>
      </Box>
    );
  };

  

  const Landing = () => {
    if (!authStarted) {
      return (
        <Box height={"medium"} direction="row">
          <Box
            width={"50%"}
            background="black"
            // justify="center"
            align="center"
            // margin={"120px"}
            pad={"small"}
          >
            <Box direction="column" pad={"medium"}>
              <Text size="large" textAlign="start">
                SUMMERJAM NFT
              </Text>
              <Heading
                size="medium"
                textAlign="start"
                color={"#e326cc"}
                pad="medium"
              >
                THIS SUMMER GONNA BE A SWEET ONE!
              </Heading>
            </Box>
          </Box>
          <Box
            width={"50%"}
            background="black"
            pad={"32px"}
            // justify="center"
            align="start"
            style={{ paddingLeft: "0px", paddingRight: "120px" }}
          >
            <Box
              direction="column"
              style={{ paddingTop: "100px", paddingBottom: "100px" }}
            >
              <Paragraph textAlign="start" size="large">
                You were part of the mission from day one. During the hunt your
                team picked up different clues and also weird coded digital
                signals
              </Paragraph>

              <Paragraph textAlign="start" size="large">
                After months of unsuccessful hunting the mission was called off.
                But you and a group of friends continued the hunt in secrecy.
                Last week the fugitives left a couple clues behind while
                strolling through the streets.
              </Paragraph>

              <Paragraph textAlign="start" size="large">
                In a crate you find 50 jars of jam in three different kinds as
                well as two pieces of paper. Upon inspection you can’t
                understand the writing but identify the other document to be
                some kind of map. You keep an extra careful eye on the jam as
                you see something swimming inside the jar.
              </Paragraph>
            </Box>
          </Box>
        </Box>
      );
    }
    // because we've set authStarted to true,
    // we can now render the AuthOnly component

    //     background: linear-gradient(113.53deg, rgba(255, 255, 255, 0.16) 0.04%, rgba(255, 255, 255, 0) 101.07%);
    // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    else {
      return (
        <Box
          align="center"
          width={"100%"}
          background="black"
          // pad={"32px"}
          justify="evenly"
          // style={{paddingTop: "250px"}}
        >
          {/* <Card
            style={{
              background:
                "linear-gradient(113.53deg, rgba(255, 255, 255, 0.16) 0.04%, rgba(255, 255, 255, 0) 101.07%)",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          > */}
          <AuthOnly />
          {/* </Card> */}
        </Box>
      );
    }
  };

  return (
    <div>
      <Header />
      {!authStarted ? <HeroBanner /> : null}
      {/* <Box background={"black"} height="large" direction="row">
        <Landing />
      </Box> */}
      <Wrapper/>
      {/* {!authStarted ? (
        <Box
          width={"100%"}
          style={{ paddingLeft: "64px" }}
          background={"black"}
          alignSelf="center"
          height="large"
          justify="center"
        >
          <ImageStripe/>
        </Box>
      ) : null} */}

      <Footer />
    </div>
  );
}
