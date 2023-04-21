import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partner1 from "../../../assets/images/landing/partners/mood.jpg";
import partner2 from "../../../assets/images/landing/partners/chainlink.png";
import partner3 from "../../../assets/images/landing/partners/nex.png";
import partner4 from "../../../assets/images/landing/partners/quickswap.png";
import partner5 from "../../../assets/images/landing/partners/arbitrum.png";

const Partners = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="partnersWrapper"
      style={{ marginTop: "5%", marginBottom: "5%" }}
    >
      <h5 className="sectionTitle">Partners</h5>
      <div className="sliderContainer">
        <Slider {...settings}>
          <div className="PartnerContainer">
            <div
              className="partnerLogoContainer"
              style={{ backgroundImage: `url(${partner1})` }}
            ></div>
            <div className="partnerDataContainer">
              <h5 className="partnerTitle">Mood Global Services</h5>
              <h5 className="partnerDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h5>
            </div>
          </div>
          <div className="PartnerContainer">
            <div
              className="partnerLogoContainer"
              style={{ backgroundImage: `url(${partner2})` }}
            ></div>
            <div className="partnerDataContainer">
              <h5 className="partnerTitle">ChainLink</h5>
              <h5 className="partnerDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h5>
            </div>
          </div>
          <div className="PartnerContainer">
            <div
              className="partnerLogoContainer"
              style={{ backgroundImage: `url(${partner3})` }}
            ></div>
            <div className="partnerDataContainer">
              <h5 className="partnerTitle">NEX Labs</h5>
              <h5 className="partnerDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h5>
            </div>
          </div>
          <div className="PartnerContainer">
            <div
              className="partnerLogoContainer"
              style={{ backgroundImage: `url(${partner4})` }}
            ></div>
            <div className="partnerDataContainer">
              <h5 className="partnerTitle">QuickSwap</h5>
              <h5 className="partnerDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h5>
            </div>
          </div>
          <div className="PartnerContainer">
            <div
              className="partnerLogoContainer"
              style={{ backgroundImage: `url(${partner5})` }}
            ></div>
            <div className="partnerDataContainer">
              <h5 className="partnerTitle">Arbitrum</h5>
              <h5 className="partnerDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h5>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
