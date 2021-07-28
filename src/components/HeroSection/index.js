import React from 'react';
import Video from '../../Videos/video.mp4'
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted height="100%" width="100%" src={Video} type='video/ mp4' />
            </HeroBackground>
            <HeroContent>
                <HeroH1>Zach Krevis</HeroH1>
                <HeroP>Software Engineer</HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
