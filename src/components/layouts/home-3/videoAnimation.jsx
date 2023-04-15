import React from 'react';
import { useEffect } from 'react';
import vidAnimation from "../../../assets/images/gusd/vidAnimationDiamond.mp4"

const DiamondVideo = () => {


    useEffect(() => {
      document.getElementById('background-video').play();
    }, [])
    

    return (
        <section id="videoAnimation">
            <video src={vidAnimation} id="background-video" muted autoPlay loop></video>
        </section>
    );
}

export default DiamondVideo;