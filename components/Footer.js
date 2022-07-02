import React from "react";
import { Box, Text, Footer, Anchor, Button } from "grommet";
import { Instagram } from "grommet-icons";
import JustaddmetaLogo from "./JustaddmetaLogo";

import styles from '../styles/footer.module.css'
export const AlphaFooter = () => {
  return (

    <footer className={styles.footer}>
    <div className={styles.footer_items}>
        <div className={styles.footer_info}>
            <h2>JUSTADDMETA</h2><br></br>
            <p>We enable your brand to <br></br>
                make a sustainable contribution <br></br>
                to the metaverse.</p>
            <button className={styles.footer_btn}>ENTER SAFE HOUSE</button>
            <div className={styles.social_media}>
                <img src="https://www.traveloffpath.com/wp-content/uploads/2017/11/instagram-icon-white-on-black-circle.png" className={styles.insta}></img>

                <img src="https://dropnite.com/images/7128-4105-1040.jpg" className={styles.tiktok}></img>
                <img src="https://www.pngkey.com/png/full/20-200938_white-discord-logo-png-png-free-discord-logo.png" className={styles.discord}></img>

            </div>
        </div>
        <div className={styles.address}>
            <h2>Office Hamburg </h2>

            <p>Justaddsugar GmbH <br></br>
                Rothenbaumchaussee 91 <br></br>
                20148 Hamburg, Germany</p>

            <a href=""> +49 Jaspers Nummer</a> <br></br>
            <a href="">hello@justaddmeta.com </a>
        </div>
    </div>
    <div className={styles.footer_brd}>
        <span></span>
    </div>
    <div className={styles.term_condition} >
        <a href="">2022 © Justaddsugar - All rights reserved.</a>
    </div>
</footer>
    // <Box fill="vertical" overflow="auto" align="center" flex="grow">
    // <Footer
    //   // align="stretch"
    //   direction="column"
    //   flex={false}
    //   background="black"
    //   height={"340px"}
    // >
    //   <Box
    //     width={"full"}
    //     align="stretch"
    //     justify="center"
    //     direction="row"
    //     height={"small"}
    //     background="black"
    //   >
    //     <Box width={"50%"} background="black">
    //       <Box
    //         align="start"
    //         width={"50%"}
    //         justify="center"
    //         gap="medium"
    //         margin={"124px"}
    //       >
    //         {/* <Anchor href="/" style={{ textDecoration: "unset" }}>
    //           <Text
    //             weight="bolder"
    //             color="light-1"
    //             alignSelf="center"
    //             size="xlarge"
    //           >
    //             JUSTADDMETA
    //           </Text>
    //         </Anchor> */}

    //         <Button href="/" alignSelf="start">
    //           <JustaddmetaLogo width="242px" height="40px" />
    //         </Button>

    //         <Text size="18px" textAlign="start" weight={"bolder"}>
    //           We enable your brand to <br></br> make a sustainable contribution{" "}
    //           <br></br> to the metaverse.
    //         </Text>
    //         {/* <Button
    //           style={{ fontWeight: "400", fontSize: "12px", width: "14px", height:"107px"}}
    //           size="medium"
    //           primary
    //           href="https://justaddmeta.com"
    //           target="_blank"
    //           color={"white"}
    //         >ENTER SAFE HOUSE</Button> */}

    //         <Button
    //           href="https://justaddmeta.com"
    //           target="_blank"
    //           alignSelf="start"
    //           style={{
    //             width: "200px",
    //             height: "64px",
    //             color: "black",
    //             fontStyle: "italic",
    //             background: "white",
    //             fontWeight: "400",
    //           }}
    //           primary
    //         >
    //           ENTER SAFE HOUSE
    //         </Button>

    //         <Box direction="row" background={"black"}>
    //           <Anchor icon={<Instagram color="white" />} />
    //           <Anchor icon={<Instagram color="white" />} />
    //           <Anchor icon={<Instagram color="white" />} />
    //         </Box>
    //       </Box>
    //     </Box>
    //     <Box width={"50%"} background="black">
    //       <Box align="end" justify="center" margin={"120px"} gap="xsmall">
    //         <Text margin={"small"} textAlign="end" size="24px" weight={"600"}>
    //           Office Hamburg
    //         </Text>
    //         <Text textAlign="end" size="medium" weight={"bolder"}>
    //           Justaddsugar GmbH
    //         </Text>
    //         <Text textAlign="end" size="medium">
    //           Rothenbaumchaussee 91
    //         </Text>
    //         <Text textAlign="end" size="medium">
    //           20148 Hamburg, Germany
    //         </Text>

    //         <Text textAlign="end" size="medium">
    //           +49 176 34990063
    //         </Text>
    //         <Text textAlign="end" size="medium">
    //           hello@justaddmeta.com
    //         </Text>
    //       </Box>
    //     </Box>
    //   </Box>

    //   <Box
    //     width={"100%"}
    //     style={{ paddingTop: "20px" }}
    //     direction="column"
    //     height={"xsmall"}
    //   >
    //     <hr width="90%" color="white" />
    //     <Text
    //       alignSelf="start"
    //       height="small"
    //       style={{
    //         paddingBottom: "small",
    //         fontStyle: "italic",
    //         paddingLeft: "120px",
    //       }}
    //     >
    //       2022 ©️ Justaddsugar - All rights reserved.
    //     </Text>
    //   </Box>
    // </Footer>
    // </Box>
  );
};
