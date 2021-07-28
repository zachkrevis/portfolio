import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 30px;
    height: 90vh;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;
 

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    
`;

export const VideoBackground = styled.video`
    height: 90vh;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-size: cover;
    background: #232a34;
    
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
`;


export const HeroH1 = styled.h1`
    color: white;
    font-size: 48px;
    text-align: left;
    
    @media screen and (max-width: 768px) {
        font-size: 40px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        text-align: center;
    }

`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: white;
    font-size: 24px;
    text-align: left;
    
    @media screen and (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
        text-align: center;
    }

`;