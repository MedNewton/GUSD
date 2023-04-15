import React from 'react';
import { useEffect } from 'react';
import Header from '../../header/Header';
import Typewriter from 'typewriter-effect/dist/core';

const Hero = () => {

    useEffect(() => {

        let heroTextWrapper = document.getElementById('heroTextWrapper');

        var typewriter = new Typewriter(heroTextWrapper, {
            loop: true,
            delay: 100,
            deleteSpeed: 100,
            pauseFor: 10,
            cursorClassName: "heroCursor"
          });

        typewriter
            .pauseFor(100)
            .typeString('Umatched price stability')
            .start();
    }, [])

    return (
        <section id="hero">
            <Header />
            <div className="heroTextWrapper row">
                <h1 className="heroTitle" id='heroTextWrapper'></h1>
                <h2 className="heroSubtitle">GUSD is a USD 1:1 stable coin, over collateralized by the best performing assets, the diamonds.</h2>
            </div>
        </section>
    );
}

export default Hero;