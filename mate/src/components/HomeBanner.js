import React from 'react';
//import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages  = [
    '/images/slider.png',
    '/images/slider2.png'
  ];

function HomeBanner() {

    return (
        <div className="home_banner">
            <div className="home_banner_w">
                <div className="logo"><img src={"/images/home_logo.png"} alt={""} /></div>
                <span className="downpage"><img src={"/images/home_downpage.png"} alt={""} /></span>
            </div>
            
        </div>
    );
};

export default HomeBanner;