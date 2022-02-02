import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #5fc2af;
    display: flex;
    padding: 30px;
    height: 560px;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1140px) {
        height: 720px;
    }

`;



export const AboutContent = styled.ul`
    z-index: 3;
    min-height: 240px;
    width: 1140px;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: top;


    @media screen and (max-width: 1140px) {
        width: 540px;
        flex-direction: Column;
    }
`;

export const AboutSection = styled.div`
    height: 320px;
    width: 570px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;


    @media screen and (max-width: 1140px) {
        width: 540px;
    }
`


export const AboutText = styled.div`
    z-index: 3;
    width: 540px;
    position: absolute;
    flex-direction: column;
    padding: 8px 24px;
    display: block;
    align-items: center;
`;

export const AboutH1 = styled.h1`
    color: white;
    font-size: 48px;
    margin-top: 24px;
    text-align: center;

`;

export const AboutP = styled.p`
    margin: 24px;
    color: white;
    font-size: 24px;
    text-align: center;

`;


export const AboutArt = styled.img`
    margin: 24px;
    width: 360px;
    z-index:3;
`;