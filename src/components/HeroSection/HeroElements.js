import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #191919 /*#42f5bf*/;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 720px;
    width: 100%;
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


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const HeroH1 = styled.h1`
    color: white /*#e85d45*/;
    font-size: 48px;
    text-align: center;
    


`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: white;
    /*#e85d45;*/
    font-size: 24px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
        text-align: center;
    }

`;

export const HeroLogo = styled.img`
    width: 20rem;
    height: 20rem;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        width: 15rem;
        height: 15rem;
        margin-bottom: 48px;

    }
`;