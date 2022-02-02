import React from 'react';
import Photo from '../../Photos/face.png'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroLogo } from './HeroElements';

const HeroSection = () => {

    return (
        <HeroContainer>
            <HeroContent>
                <HeroLogo src={Photo} alt = "Webpage Logo" draggable="false"/>
                <HeroH1>Zach Krevis</HeroH1>
                <HeroP>Software Engineer | Web Developer</HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
