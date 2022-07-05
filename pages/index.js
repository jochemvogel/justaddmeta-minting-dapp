import {
  useAddress,
  useDisconnect,
  useMetamask,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";


import { Header } from "../components/Header";
import {Wrapper} from "../components/Wrapper";

export default function Home() {
  // Grab the currently connected wallet's address
  const address = useAddress();
  const isOnWrongNetwork = useNetworkMismatch();
  const connectWallet = useMetamask();
  const disconnectWallet = useDisconnect();
  const [authStarted, setAuthStarted] = useState(false);

  
  return (
    <div>
      <Header />
      <Wrapper/>
      <Footer />
    </div>
  );
}
