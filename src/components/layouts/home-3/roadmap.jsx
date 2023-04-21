import React from "react";
import { useState, useEffect } from "react";

import icon from "../../../assets/images/gusd/logo.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const gusdIcon = () => {
    return(
        <img src={icon} alt="" />
    )
}

const Roadmap = () => {
  return (
    <div id="roadmap">
        <h5 className="sectionTitle" style={{marginBottom: "5%"}}>Roadmap</h5>
      <VerticalTimeline lineColor="#397A26">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#082D17", color: "#fff", fontFamily: "CircularMedium" }}
          contentArrowStyle={{ borderRight: "7px solid  #082D17" }}
          iconStyle={{ background: "#fff", color: "#fff", border: "solid 3px #72CF51" }}
          icon={<img src={icon} alt="" />}
        >
          <h5 className="vertical-timeline-element-title">2023 - Q1</h5>
          <p>&#9679;&nbsp;&nbsp;Distribution CBD token</p>
          <p>&#9679;&nbsp;&nbsp;Fundraising</p>
          <p>&#9679;&nbsp;&nbsp;Creation of the community.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#082D17", color: "#fff", fontFamily: "CircularMedium" }}
          contentArrowStyle={{ borderRight: "7px solid  #082D17" }}
          iconStyle={{ background: "#fff", color: "#fff", border: "solid 3px #72CF51" }}
          icon={<img src={icon} alt="" />}
        >
          <h5 className="vertical-timeline-element-title">2023 - Q2</h5>
          <p>&#9679;&nbsp;&nbsp;Launch of the E-commerce related to CBD products</p>
          <p>&#9679;&nbsp;&nbsp;Development of the P2P secondary market of sales CBD</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#082D17", color: "#fff", fontFamily: "CircularMedium" }}
          contentArrowStyle={{ borderRight: "7px solid  #082D17" }}
          iconStyle={{ background: "#fff", color: "#fff", border: "solid 3px #72CF51" }}
          icon={<img src={icon} alt="" />}
        >
          <h5 className="vertical-timeline-element-title">2023 - Q3/Q4</h5>
          <p>&#9679;&nbsp;&nbsp;Development of the decentralized bank architecture</p>
          <p>&#9679;&nbsp;&nbsp;Lunch of the decentralized bank</p>
          <p>&#9679;&nbsp;&nbsp;Features to the bank like borrow and loan assets and collateralized investments.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#082D17", color: "#fff", fontFamily: "CircularMedium" }}
          contentArrowStyle={{ borderRight: "7px solid  #082D17" }}
          iconStyle={{ background: "#fff", color: "#fff", border: "solid 3px #72CF51" }}
          icon={<img src={icon} alt="" />}
          
        >
          <h5 className="vertical-timeline-element-title">2024</h5>
          <p>&#9679;&nbsp;&nbsp;Development of the CBD ecosystem and the bank with mobile app structure.</p>
          <p>&#9679;&nbsp;&nbsp;Listing of CBD token to centralized exchange.</p>
          <p>&#9679;&nbsp;&nbsp;Creation of CBD and Canapa related financial products.</p>
        </VerticalTimelineElement>
        
        
      </VerticalTimeline>
    </div>
  );
};

export default Roadmap;
