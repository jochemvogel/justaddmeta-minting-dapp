import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Heading,
  Text,
  Button,
  Notification,
  Spinner,
  Paragraph,
  Image,
  CardBody,
  CardFooter,
  CardHeader,
  Anchor,
} from "grommet";
import {
  useAddress,
  useNetwork,
  useMetamask,
  useNetworkMismatch,
  useEditionDrop,
  ChainId,
} from "@thirdweb-dev/react";

import { Car, StatusGood, Validate } from "grommet-icons";

export default function Airdrop() {
  const maxSupply = 1000; // for testing
  const connectWithMetamask = useMetamask();
  // const { data: session } = useSession();
  const address = useAddress();

  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const editionDrop = useEditionDrop(
    "0xB4B8f15C9FF18B01D6894713c2e7712fBE2871Ca"
  );
  const [isClaiming, setIsClaiming] = useState(false);
  const [justClaimed, setJustClaimed] = useState(false); // so we can show -mint another- instead -mint- text on button.
  // const [amount, setAmount] = useState(1); // max mint amount at a time, default 1
  const [totalMinted, setTotalMinted] = useState(0);
  const [claimFailed, setClaimFailed] = useState(false);
  const [displayInfoToast, setDisplayInfoToast] = useState(false);

  const configClaimPhases = async () => {
    const saleStartTime = new Date();

    let tokenId = null;
    const claimConditionsJAM0 = [
      {
        startTime: saleStartTime, // start the presale now
        maxQuantity: 1000, // limit how many mints for this test minting. for now it's 250 @ rinkeby.
        price: 0, // sale price
        snapshot: [
          "0xF2Bb8DCD9c246c03a42b029942DDD92Dd0Ea2302",
          "0xfac0475b677b54f72682E0EA633Ffa1088110dcf",
          "0xeA718966A209c5244D8Ad686560a97F29381a84F",
        ], // limit minting to only certain addresses
      },
    ];

    tokenId = 0; // the id of the NFT to set claim conditions on
    await editionDrop.claimConditions.set(tokenId, claimConditionsJAM0);

    const claimConditionsJAM1 = [
      {
        startTime: saleStartTime, // start the presale now
        maxQuantity: 1000, // limit how many mints for this test minting. for now it's 250 @ rinkeby.
        price: 0, // sale price
        snapshot: [
          "0xF2Bb8DCD9c246c03a42b029942DDD92Dd0Ea2302",
          "0xfac0475b677b54f72682E0EA633Ffa1088110dcf",
          "0xeA718966A209c5244D8Ad686560a97F29381a84F",
          "0x240d0a6aEFbFb5e188BdC2Ab4Bf685a9a5aA5EDD",
        ], // limit minting to only certain addresses
      },
    ];

    tokenId = 1;
    await editionDrop.claimConditions.set(tokenId, claimConditionsJAM1);
  };

  // async function newMintStat(wallet_address, token_id, order_in_minting) {
  //   console.log("getting the total minted count ..")

  //   let x = await getTotalMintedCount();
  //   console.log(`adding MintStat, order_in_minting: ${order_in_minting}
  //   \n total_minted_count: ${JSON.stringify(x)} >> `)
  //   addMintStat(wallet_address, token_id, order_in_minting);
  // }

  // const getTotalMinted = async() => {
  //   const total  = await editionDrop.getTotalCount(); //ContractEvents
  //   console.log(`number of tokens : ${total}`)
  //   return total;
  // }

  const checkThisOut = () => {
    return (
      <Card>
        <CardHeader>Checkout</CardHeader>
        <CardBody>
          <Box direction="row">
            <Box width={"50%"}>
              <Image width={"400px"} height="600px"></Image>
            </Box>
            <Box width={"50%"} direction="column">
              <Text size="large">You sucessfully minted ...</Text>
              <Button size="large" primary color={"white"}>
                fetch Etherscan link
              </Button>
              <Button size="large" color={"white"}>
                fetch Opensea link
              </Button>
            </Box>
          </Box>
        </CardBody>
      </Card>
    );
  };

  const getTokenStats = async (tokenId) => {
    const x = await editionDrop.get(tokenId);
    const total = x.supply;

    // setTotalMinted(total);
    console.log(`total : ${total}`);
    // console.log(`total minted state: ${totalMinted}`)
    return total;
  };

  // const tokenStat=  await getTokenStats(tokenId);
  // const total = tokenStat.toNumber();
  // setTotalMinted(total);

  async function claimNFT(tokenId) {
    // Ensure wallet connected
    if (!address) {
      alert("Please reconnect your wallet to continue.");
      return;
    }

    // Ensure correct network
    if (isOnWrongNetwork) {
      switchNetwork(ChainId.Rinkeby);
      return;
    }

    // just once, from time to time. just run it locally,
    // !! unless updates not needed or it's nnever leave uncommented.
    // await configClaimPhases();
    // we'll only run it via code (here, for now @ minting phase for convenience.)
    // keeping here until we develop our dashboard to make those configurations without touching the source code.

    // restrict claiming only one ERC1155 token at a time. The amount is configured by us.
    // for now, keeping textInput below and amount @ useState commented. we'll extract them to components later.

    const tokenStat = await getTokenStats(tokenId);
    const total = tokenStat.toNumber();
    console.log(`current supply as state: ${total}`);
    if (total < maxSupply) {
      setIsClaiming(true);
      // console.log(`100 - ${total}: there's ${maxSupply - total} more to mint.`);
      try {
        await editionDrop.claimTo(address, 1, 1);
        setJustClaimed(true);
        setTotalMinted(total + 1);
        setDisplayInfoToast(true);
      } catch (error) {
        console.log(`error on claiming., \n ${error}`);
      }
      setIsClaiming(false);
    }
    // console.log(`total minted so far: ${x}`);

    // console.log(`totalMinted now: ${totalMinted}`);
    //await newMintStat(address, 1, totalMinted);
  }

  return (
    <Box
      fill="vertical"
      // overflow="auto"
      align="center"
      flex="grow"
      pad="medium"
    >
      <Card
        pad="medium"
        justify="center"
        direction="column"
        // align="stretch"
        gap="xxsmall"
      >
        <CardBody pad="medium" gap="medium">
          {address && !isClaiming && !justClaimed ? (
            <Box direction="row">
              <Box
                width={"50%"}
                // background="black"
                justify="center"
                align="start"
                pad={"32px"}
              >
                <Image
                  src="https://i.imgur.com/mSBSyOz.png"
                  width={"460px"}
                  height={"500px"}
                />
              </Box>

              <Box
                width={"50%"}
                // background="black"
                justify="center"
                align="end"
                pad={"32px"}
              >
                <Box
                  direction="row"
                  gap="medium"
                  alignSelf="start"
                  pad={"small"}
                >
                  <Text alignSelf="start" size="large">
                    SUMMERJAM
                  </Text>
                  <Validate size="medium" />
                </Box>
                <Heading textAlign="start" size="small">
                  Metaverse has never been this delightful
                </Heading>
                <Paragraph textAlign="start" size="large">
                  Remarkable virtual craftsmanship meets ostentatious yet
                  familiar design. Ingredients from a different dimension and
                  extravagant hints of fruits suiting everyone&apos;s palate.
                </Paragraph>

                <Paragraph textAlign="start" size="large">
                  Exclusive limited edition of 50 summer jams in three
                  delightful varieties.
                </Paragraph>

                {/* <Paragraph textAlign="center" size="large" margin={"small"}>
                  {totalMinted + 1}/Y minted
                </Paragraph> */}

                <Box size="small" margin={"small"} alignSelf="start">
                  <Button
                    // // label="mint"
                    // sec
                    label="mint"
                    primary
                    color="white"
                    size="large"
                    disabled={false}
                    onClick={() => claimNFT(1)}
                  ></Button>
                </Box>
              </Box>
            </Box>
          ) : null}
          {isClaiming ? (
            <Box direction="column" gap="large" margin={"medium"}>
              {/* <Box direction="row" gap="small" size="large">
                <Spinner size="medium" color="#DCDCDC" alignSelf="center" />
                <Text size="xxlarge"> Approve Asset</Text>{" "}
              </Box> */}
              <Box direction="row" gap="small" size="large">
                <Spinner size="medium" color="#DCDCDC" alignSelf="center" />
                <Text size="xxlarge"> Mint NFT</Text>
              </Box>
            </Box>
          ) : (
            <></>
          )}

          {!isClaiming && justClaimed ? (
            <>
              <Box
                direction="row"
                gap="medium"
                alignSelf="center"
                pad={"small"}
              >
                <Text alignSelf="start" size="large" weight={"bold"}>
                  SUMMERJAM
                </Text>
                <Validate size="medium" />
              </Box>
              {/* <Box background="#DCDCDC" margin={"medium"} pad="small">
                <Text textAlign="center" size="xlarge" weight={"bold"}>
                  {totalMinted}/100 minted
                </Text>
              </Box> */}
              <Box direction="column">
                {/* <Box direction="row" gap="small" size="large" margin={"small"}>
                  <StatusGood size="large" alignSelf="center" />
                  <Text size="xxlarge"> Approve Asset</Text>{" "}
                </Box> */}
                <Box direction="row" gap="small" size="large" margin={"small"}>
                  <StatusGood size="large" alignSelf="center" />
                  <Text size="xxlarge"> Mint NFT </Text>
                </Box>
                {/* <Box margin={"small"} width="small" alignSelf="center">
                  <Button
                    size="large"
                    label="Continue"
                    onClick={() => checkThisOut()}
                  ></Button>
                </Box> */}
              </Box>
            </>
          ) : null}
          {/* <Button label="Connect Wallet" disabled={false} active={false} primary /> */}
          {!isClaiming && !address ? (
            <>
              <Button
                onClick={connectWithMetamask}
                disabled={false}
                active={false}
                color={"black"}
                primary
                label="Connect Wallet"
                size="large"
              />
              <Button size="large" label="Claim NFT" disabled={true} />
            </>
          ) : null}

          {/* {displayInfoToast ? (
            <Notification
              toast
              background="#1a161c"
              title="You've got a SUMMERJAM NFT!"
              message="Please check your wallet, it should be there by now."
              onClose={() => setDisplayInfoToast(false)}
            />
          ) : null} */}
        </CardBody>
        <CardFooter pad={"medium"}></CardFooter>
      </Card>
    </Box>
  );
}
