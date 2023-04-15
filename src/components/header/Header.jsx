import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink as AnchorLink } from 'react-router-hash-link';
import menus from "../../pages/menu";
import logoheader from '../../assets/images/gusd/logo.png'
import { Button } from 'react-bootstrap';

const Header = () => {


    

    



    return (
        <div className="header row">
            <div className="col-2 headerLogo">
                <img src={logoheader} alt="" />
                <h5 className="logoText">
                    GUSD
                </h5>
            </div>
            <div className="col-2"></div>
            <div className="col-8 navMenu">
            
            <AnchorLink to={"/#whyGUSD"}>
            <h5 className="navMenuItem">
                    Why GUSD?
                </h5>
            </AnchorLink>
                
                <Link to={'/signup'} ><button className="navBtn"><span>Get Started</span></button></Link>
            </div>
        </div>
    );
}

export default Header;
