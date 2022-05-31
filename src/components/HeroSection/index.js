import React from 'react';
import Photo from '../../Photos/face.png'
import './hero_style.scss';

import { Link } from 'react-scroll';

const HeroSection = () => {

    return (
        <div className='HeroContainer'>
            
            <div className='HeroContent'>
                <h1 className='HeroH1'>Zach Krevis</h1>
                <p className='HeroP'>Software Engineer | Web Developer</p>
                <Link className="HeroLink" to="ContactMe" spy={true} smooth={true} duration={500} offset={-52} activeClass="active">Contact Me</Link>
            </div>
            <div>
                <img className='HeroLogo' src={Photo} alt = "Webpage Logo" draggable="false"/>
            </div>
        </div>
    );
};

export default HeroSection;
