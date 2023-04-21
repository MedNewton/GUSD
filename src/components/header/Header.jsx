import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink as AnchorLink } from "react-router-hash-link";
import menus from "../../pages/menu";
import logoheader from "../../assets/images/gusd/logo.png";
import { Button } from "react-bootstrap";

import { Menu, SubMenu, Item } from "burger-menu";
import "burger-menu/lib/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header row">
      <div className="col-2 headerLogo" onClick={()=>{window.location.href = "/"}}>
        <img src={logoheader} alt="" />
        <h5 className="logoText">GUSD</h5>
      </div>
      <div className="col-2"></div>
      <div className="col-8 navMenu">
        <AnchorLink to={"/#whyGUSD"}>
          <h5 className="navMenuItem">Why GUSD?</h5>
        </AnchorLink>
        <AnchorLink to={"/buy_gusd"}>
          <h5 className="navMenuItem">Buy GUSD</h5>
        </AnchorLink>

        <Link to={"/signup"}>
          <button className="navBtn">
            <span>Get Started</span>
          </button>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          height={25}
          width={25}
          className="mobileMenuBtn"
          viewBox="0 0 32 32"
          id="list"
          onClick={() => setIsOpen(!isOpen)}
        >
          <defs></defs>
          <path
            fill="#fff"
            d="M3 9h26a2 2 0 0 0 0-4H3a2 2 0 0 0 0 4ZM29 14H3a2 2 0 0 0 0 4h26a2 2 0 0 0 0-4ZM29 23H3a2 2 0 0 0 0 4h26a2 2 0 0 0 0-4Z"
          ></path>
        </svg>
        <Menu
          className="burger-menu"
          isOpen={isOpen}
          selectedKey={"entry"}
          onClose={() => setIsOpen(false)}
        >
          <AnchorLink to={"/#whyGUSD"}>
            <Item itemKey={"why"} text={"Why GUSD ?"} onClick={() => setIsOpen(!isOpen)}></Item>
          </AnchorLink>

          <AnchorLink to={"/buy_gusd"}>
            <Item itemKey={"buy"} text={"Buy GUSD"} onClick={() => setIsOpen(!isOpen)}></Item>
          </AnchorLink>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
