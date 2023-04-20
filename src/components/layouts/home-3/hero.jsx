import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Typewriter from "typewriter-effect/dist/core";
import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";

const Hero = () => {
  useEffect(() => {
    let heroTextWrapper = document.getElementById("heroTextWrapper");

    var typewriter = new Typewriter(heroTextWrapper, {
      loop: true,
      delay: 100,
      deleteSpeed: 100,
      pauseFor: 10,
      cursorClassName: "heroCursor",
    });

    typewriter.pauseFor(100).typeString("Umatched price stability").start();
  }, []);

  return (
    <section id="hero">
      <Header />
      <div className="heroTextWrapper row">
        <h1 className="heroTitle" id="heroTextWrapper"></h1>
        <h2 className="heroSubtitle">
          GUSD is a USD 1:1 stable coin, over collateralized by the best
          performing assets, the diamonds.
        </h2>
      </div>
      <Link
        to={"https://foundationblockchain.gitbook.io/gusd-protocol/"}
        target="_blank"
      >
        <div className="docsLink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"2.5rem"}
            height={"2.5rem"}
            style={{marginRight: "5%"}}
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#ffffff"
              strokeWidth={"1.5"}
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.5 5.5V22c0 .8-.7 1.5-1.5 1.5H5c-.8 0-1.5-.7-1.5-1.5V2c0-.8.7-1.5 1.5-1.5h10.5l5 5z"
            ></path>
            <path
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.5.5V4c0 .8.7 1.5 1.5 1.5h3.5M7.5 11.5h9M7.5 13.5h9M7.5 15.5h9M7.5 17.5h5"
            ></path>
          </svg>
          <span>Docs</span>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
