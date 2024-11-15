import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2></h2>
                <div class="welcome-message">
                    🎅 Welcome New Offers on Merch! 🎅
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="Arrow Icon" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="Hero" />
            </div>
        </div>
    );
}

export default Hero;
