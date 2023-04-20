import React from 'react';
import TwitterIcon from '../../../assets/images/landing/Twitter.svg'
import TelegramIcon from '../../../assets/images/landing/Telegram.svg'
import DiscordIcon from '../../../assets/images/landing/Discord.svg'
import MediumIcon from '../../../assets/images/landing/Medium.svg'
import GithubIcon from '../../../assets/images/landing/github.svg'
import CrewIcon from '../../../assets/images/landing/crew3.svg'
import FacebookIcon from '../../../assets/images/landing/fb.svg'
import InstagramIcon from '../../../assets/images/landing/insta.svg'
import LinkedinIcon from '../../../assets/images/landing/in.svg'

import { Link } from 'react-router-dom';


const DappCommunity = () => {
    return (
        <div className='dappCommunityWrapper'>
            <div className="circlesWrapper">
                <div className='circle1'>
                    <div className="circle2">
                        <div className="circle3">
                            <div className="circle4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="communityTextWrapper">
                <hr className='communityHR' hidden/>
                <h5 className='communityTitle'>JOIN OUR <span className='communityGradientText'>COMMUNITY</span></h5>
                <h5 className='communitySubtitle'>Learn more about GUSD & GATO CHAIN, interact with the our team and engage with other investors. Join the community and have your say in shaping the future of decentralized finance.</h5>
                <div className="communityIconsWrapper">
                    <Link to={"https://twitter.com/GatoBlockchain"} target="_blank">
                    <div className="communityIconWrapper"><img src={TwitterIcon} alt="" className='communityIcon' /></div>
                    </Link>
                    <Link to={"https://t.me/Gato_Chain"} target="_blank">
                    <div className="communityIconWrapper"><img src={TelegramIcon} alt="" className='communityIcon' /></div>
                    </Link>
                    <Link to={"https://medium.com/@gatochain"} target="_blank">
                    <div className="communityIconWrapper"><img src={MediumIcon} alt="" className='communityIcon' /></div>
                    </Link>
                    <Link to={"https://www.instagram.com/gatochain/"} target="_blank">
                    <div className="communityIconWrapper"><img src={InstagramIcon} alt="" className='communityIcon' /></div>
                    </Link>
                    <Link to={"https://www.linkedin.com/company/gatochain/"} target="_blank">
                    <div className="communityIconWrapper"><img src={LinkedinIcon} alt="" className='communityIcon' /></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DappCommunity;