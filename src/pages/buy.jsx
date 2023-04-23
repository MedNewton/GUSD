import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import SwappingLayout from "../components/layouts/SwapingLayout";
import FromSwapModal from "../components/layouts/swapModal";
import ToSwapModal from "../components/layouts/toSwapModal";
import { Button } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import SwappingV3 from "../components/layouts/SwappingV3";

import { UserContext } from "../App";
import { useContext } from "react";

const Buy = () => {
  const [swapFromModalShow, setSwapFromModalShow] = useState(false);
  const [swapToModalShow, setSwapToModalShow] = useState(false);
  const [coin, setCoin] = useState();

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '25%', value: '25' },
    { name: '50%', value: '50' },
    { name: '75%', value: '75' },
    { name: '100%', value: '100' },
  ];

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
                  <div>
                  <div className="maxswapIn">MAX</div>
                  <input type="number" id='swapInInput' className='swapInInput' placeholder='0.0' />
                  </div>

                </div>

              </div>
              <div className="percentageBox">
                <div className="percentageBtn">25%</div>
                <div className="percentageBtn">50%</div>
                <div className="percentageBtn">75%</div>
                <div className="percentageBtn">100%</div>
              </div>
              <div className="avBox">
                <h5 className="avText">Availability: 0 GUSD</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" id="refresh"><g transform="translate(0 -1027.362)"><circle cx="12.5" cy="1039.862" r="12.5" fill="#fff"></circle><path fill="#0A3F20" d="m5.564 1.031-4.128.584 1.517 1.518a6.989 6.989 0 0 0-1.892 3.924 6.985 6.985 0 0 0 .877 4.412A7.003 7.003 0 0 0 9.81 14.73 7.005 7.005 0 0 0 15 7.97a7.006 7.006 0 0 0-5.19-6.762l-.257.967A5.997 5.997 0 0 1 14 7.97a5.993 5.993 0 0 1-4.447 5.793 5.997 5.997 0 0 1-6.75-2.795 5.987 5.987 0 0 1 .86-7.127l1.312 1.312.142-.99z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(4.752 1032.393)"></path></g></svg>
              </div>
              <div className="swapOutBox">
                <h5 className="swapOutBoxTitle">Output</h5>
                <div className="swapOutFormWrapper">
                  <Button className='toCoinBtn' onClick={() => { setSwapToModalShow(true) }}>
                    <img src={toCoin.logo} className="swapCoinLogo" alt="" />
                    <span>{toCoin.symbol.toString().toUpperCase()}</span>
                  </Button>
                  <div className="maxswapIn">MAX</div>
                  <input type="number" id='swapOutInput' className='swapOutInput' placeholder='0.0' readOnly />

                </div>

              </div>
              <div className="percentageBox">
                <div className="percentageBtn">25%</div>
                <div className="percentageBtn">50%</div>
                <div className="percentageBtn">75%</div>
                <div className="percentageBtn">100%</div>
              </div>
              <Button className="swapBtn">Connect Wallet</Button>
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
