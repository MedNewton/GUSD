import React from 'react';
import { useEffect } from 'react';
import Hero from '../components/layouts/home-3/hero';
import DiamondVideo from '../components/layouts/home-3/videoAnimation';
import Why from '../components/layouts/home-3/Why';
import How from '../components/layouts/home-3/How';
import News from '../components/layouts/home-3/News';
import Numbers from '../components/layouts/home-3/Numbers';
import DappCommunity from '../components/layouts/home-3/dappCommunity'
import GatoChain from '../components/layouts/home-3/GATOCHAIN';
import Diamonds from '../components/layouts/home-3/DiamondsAnimation'
import Footer from '../components/footer/Footer';

const Home03 = () => {


    useEffect(() => {
        document.body.style.overflow = "auto";
    })

    return (
        <div className='home-3' style={{position: "relative"}}>
            <Hero />
            <DiamondVideo />
            <Why/>
            <How />
            <News />
            <Numbers />
            <DappCommunity />
            <GatoChain />
            <Diamonds />
            <Footer />
        </div>
    );
}

export default Home03;
