import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import Head from "next/head";
import "../styles/globals.css";
// import "../styles/footer.css"
// import "../styles/header.css"

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;

// const theme = {
//   "global": {
//     "colors": {
//       "background": {
//         "light": "#ffffff",
//         "dark": "#000000"
//       }
//     },
//     "font": {
//       "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
//     }
//   },
//   "button": {
//     "extend": [
//       null
//     ]
//   }
// }

function MyApp({ Component, navBar, pageProps }) {
  return (


    <ThirdwebProvider desiredChainId={activeChainId}>
      {/* Next Auth Session Provider */}
      {/* <SessionProvider session={pageProps.session}> */}
        <Head>
          <title>SUMMERJAM</title>
        </Head>
        <navBar></navBar>
        <Component {...pageProps} />
    </ThirdwebProvider>


  );
}

export default MyApp;
