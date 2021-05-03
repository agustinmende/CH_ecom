import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages  = [
    '/images/slider.png',
    '/images/slider2.png'
  ];

function Slider() {

    const fadeProperties = {
        duration: 4000,
        transitionDuration: 1000,
        infinite: true,
        indicators: true,
        arrows: false
      }

    return (
        <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
            <img src={fadeImages[0]} alt="Fierro Santo"/>
        </div>
        <div className="each-fade">
            <img src={fadeImages[1]} alt="Fierro Santo" />
        </div>
      </Fade>
    </div>
    );
};

export default Slider;