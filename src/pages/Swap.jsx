import React from 'react';
import { useEffect, useState } from 'react';
import DappHeader from '../components/header/DapHeader';
import Header from '../components/header/Header';
import heroSliderData from '../assets/fake-data/data-slider-3';
import SwappingLayout from '../components/layouts/SwapingLayout';
import Community from '../components/layouts/home-3/Community';
import DappCommunity from '../components/layouts/home-3/dappCommunity';
import FromSwapModal from '../components/layouts/swapModal';
import ToSwapModal from '../components/layouts/toSwapModal';

import { Button } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import pawIcon from '../assets/images/swapping/Paw_coin.png'
import usdtIcon from '../assets/images/swapping/USDT_coin.png'

import leaves5 from '../assets/images/swapping/Leaves_05.svg'
import leaves1 from '../assets/images/swapping/Leaves_01.svg'
import leaves8 from '../assets/images/swapping/Leaves_08.svg'
import leaves7 from '../assets/images/minting/Leaves_07.svg'
import swappingGorilla from '../assets/images/swapping/CrazyZoo_Gorilla0005.avif'
import swappingRhino from '../assets/images/swapping/CrazyZoo_Rhino_V1_0006.avif'

import SwappingBox from '../components/layouts/SwappingBox';
import SwappingV3 from '../components/SwappingV3';

import mintingData from '../assets/fake-data/fakeMintingData'

import { UserContext } from '../App';
import { useContext } from 'react';

const SwapPage = () => {

  const [swapFromModalShow, setSwapFromModalShow] = useState(false);
  const [swapToModalShow, setSwapToModalShow] = useState(false);
  const [coin, setCoin] = useState();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const swappingV3Value = [
    {
      price: 1.27,
      from: "MATIC",
      to: "USD"
    }
  ];

  const swapCurrencies = [
    {
      name: "ZOO",
      symbol: "zoo",
      logo: pawIcon
    },
    {
      name: "BITCOIN",
      symbol: "btc",
      logo: "https://assets.coincap.io/assets/icons/btc@2x.png"
    }

  ];

  //const [fromCoin, setFromCoin] = useState(swapCurrencies[0]);
  //const [toCoin, setToCoin] = useState(swapCurrencies[1]);


  const [fromCoin, setFromCoin, toCoin, setToCoin] = useContext(UserContext)


  return (
    <div className='home-3' style={{ overflow: "hidden" }}>
      <Header />
      <div className="swappingPageContainer" >
        <img src={leaves1} className="swappingLeaves1" alt="" />
        <img src={leaves5} className="swappingLeaves5" alt="" />
        <img src={leaves8} className="swappingLeaves8" alt="" />
        <img src={leaves7} className="swappingLeaves7" alt="" />
        <img src={swappingGorilla} className="swappingGorilla" alt="" />
        <img src={swappingRhino} className="swappingRhino" alt="" />
        <div className="row swappingBoxWrapper centered-axis-x centered-axis-y">
          <div className="mintingGlassBox">
            <div className="mintingBoxTitleWrapper">Swap Tokens</div>
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

      </div>
      <DappCommunity />
      <FromSwapModal
        show={swapFromModalShow}
        onHide={() => { setSwapFromModalShow(false) }}
        
      ></FromSwapModal>
      <ToSwapModal
        show={swapToModalShow}
        onHide={() => { setSwapToModalShow(false) }}
        
      ></ToSwapModal>
    </div>
  );
}

export default SwapPage;
