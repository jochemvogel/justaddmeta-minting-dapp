import { useAddress, useMetamask, useEditionDrop } from "@thirdweb-dev/react";

import React, { useState, useEffect } from "react";

import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Text,
  Heading,
  Paragraph,
} from "grommet";

export default function Checkout({ txHash }) {
    console.log(`txhash@Checkout >> ${txHash}`);
  //  const [etherscanLink, setEtherscanLink] = useState("https://rinkeby.etherscan.io/tx/" + txHash);

  // useEffect(() => {
  //     const fetchData = async () => {
  //       const x = await editionDrop.get(1);
  //       const total = x.supply;
  //       return total.toNumber();
  //     };
  //     fetchData()
  //       .then((data) => setTo(data))
  //       .catch(console.error);
  //   }, []);

  return (
    <Box
    fill="vertical"
    // overflow="auto"
    align="center"
    flex="grow"
    pad="medium"
    justify="center"
    direction="column"
    // align="stretch"
    gap="small"
    style={{
      background:
        "linear-gradient(113.53deg, rgba(255, 255, 255, 0.16) 0.04%, rgba(255, 255, 255, 0) 101.07%)",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    }}
  >

    <Text>Checkout </Text>
    <Button primary color={"white"} size="large" href={"https://rinkeby.etherscan.io/tx/" + txHash} target="_blank">Fetch Etherscan link</Button>
  </Box>
  );
}
