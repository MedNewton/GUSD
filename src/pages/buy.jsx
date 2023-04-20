import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import SwappingLayout from "../components/layouts/SwapingLayout";
import FromSwapModal from "../components/layouts/swapModal";
import ToSwapModal from "../components/layouts/toSwapModal";
import { Button } from "react-bootstrap";
import SwappingV3 from "../components/layouts/SwappingV3";

import { UserContext } from "../App";
import { useContext } from "react";

const Buy = () => {
  const [swapFromModalShow, setSwapFromModalShow] = useState(false);
  const [swapToModalShow, setSwapToModalShow] = useState(false);
  const [coin, setCoin] = useState();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  const swappingV3Value = [
    {
      price: 1.27,
      from: "MATIC",
      to: "USD",
    },
  ];

  const swapCurrencies = [
    {
      name: "BITCOIN",
      symbol: "btc",
      logo: "https://assets.coincap.io/assets/icons/btc@2x.png",
    },
  ];

  //const [fromCoin, setFromCoin] = useState(swapCurrencies[0]);
  //const [toCoin, setToCoin] = useState(swapCurrencies[1]);

  const [fromCoin, setFromCoin, toCoin, setToCoin] = useContext(UserContext);

  return (
    <section id="buy">
      <Header />
      <div className="swappingPageContainer" >
        <div className="row swappingBoxWrapper centered-axis-x centered-axis-y">
          <div className="mintingGlassBox">
            
            <div className="row swappingFormWrapper">
              <div className="swapInBox">
                <h5 className="swapInBoxTitle">Input</h5>
                <div className="swapInFormWrapper">
                  <Button className='fromCoinBtn' onClick={() => { setSwapFromModalShow(true) }}>
                    <img src={fromCoin.logo} className="swapCoinLogo" alt="" />
                    <span>{fromCoin.symbol.toString().toUpperCase()}</span>
                  </Button>
                  <div className="maxswapIn">50% max</div>
                  <input type="number" id='swapInInput' className='swapInInput' placeholder='0.0' />

                </div>

              </div>
              <div className="swapOutBox">
                <h5 className="swapOutBoxTitle">Output</h5>
                <div className="swapOutFormWrapper">
                  <Button className='toCoinBtn' onClick={() => { setSwapToModalShow(true) }}>
                    <img src={toCoin.logo} className="swapCoinLogo" alt="" />
                    <span>{toCoin.symbol.toString().toUpperCase()}</span>
                  </Button>
                  <div className="maxswapIn">50% max</div>
                  <input type="number" id='swapOutInput' className='swapOutInput' placeholder='0.0' readOnly />

                </div>

              </div>
              <Button className="swapBtn">Approve</Button>
            </div>

          </div>
          <SwappingV3 data={swappingV3Value} />
        </div>
        <FromSwapModal
        show={swapFromModalShow}
        onHide={() => { setSwapFromModalShow(false) }}
        
      ></FromSwapModal>
      <ToSwapModal
        show={swapToModalShow}
        onHide={() => { setSwapToModalShow(false) }}
        
      ></ToSwapModal>

      </div>
    </section>
  );
};

export default Buy;
