import React from "react";
import { useEffect } from "react";
import Hero from "../components/layouts/home-3/hero";
import DiamondVideo from "../components/layouts/home-3/videoAnimation";
import Why from "../components/layouts/home-3/Why";
import How from "../components/layouts/home-3/How";
import News from "../components/layouts/home-3/News";
import Numbers from "../components/layouts/home-3/Numbers";
import DappCommunity from "../components/layouts/home-3/dappCommunity";
import GatoChain from "../components/layouts/home-3/GATOCHAIN";
import Diamonds from "../components/layouts/home-3/DiamondsAnimation";
import Partners from "../components/layouts/home-3/Partners";
import Footer from "../components/footer/Footer";

import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';

const Home03 = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  return (
    <div className="home-3" style={{ position: "relative" }}>
        <Ticker>
          <FinancialTicker id="1" change={true} symbol="VOLUME" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="2" change={true} symbol="MARKET CAP" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="3" change={true} symbol="SUPPLY" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="4" change={false} symbol="USE DEMAND" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="5" change={false} symbol="DIAMOND PRICE" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
        </Ticker>
      <Hero />
      <div
        style={{
          backgroundColor: "#000",
          height: "5vh",
          width: "100vw",
          position: "relative",
          zIndex: "50",
          boxShadow: "0px -10px 100px 100px #000"
        }}
      ></div>
      <DiamondVideo />
      <Why />
      <How />
      <News />
      <Numbers />
      <Partners />
      <GatoChain />
      <DappCommunity />
      <Diamonds />
      
      <Footer />
    </div>
  );
};

export default Home03;
