import styled from 'styled-components';



export const CourseContainer = styled.div`
    background: #5fc2af;
    display: flex;
    justify-content: center;
    align-items: top;
    padding-right: 28px;
    padding-left:28px;
    margin: 0px;
    height: 900px;
    width: 100%;
    position: relative;
    z-index: 1;
    display:box;

    @media screen and (max-width: 960px) {
        justify-content: center;
        height: 2700px;
    }

`;

export const CourseContent = styled.ul`
    z-index: 3;
    height: 750px;
    width: 1140px;
    position: absolute;
    display: flex;
    flex-direction: Row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 1140px) {
        width: 960px;
    }

    @media screen and (max-width: 960px) {
        flex-direction: Column;
        height: 2250px;
    }
`;

export const CourseColumn = styled.div`
    height: 650px;
    width: 324px;
    color: white;
    background: #191919;
    padding: 70px 45px;
    display: block;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    border-radius: 32px;
    margin: 24px;
    justify-content: center;

    box-shadow: 0 0 80px #0000007a;

    @media screen and (max-width: 1140px) {
        width: 264px;
    }

    @media screen and (max-width: 960px) {
        width: 480px;
    }

    @media screen and (max-width: 960px) {
        [data-aos-delay] {
          transition-delay: 0s !important;
        }
      }

    :nth-child(3n) {
        border-right: none;
        border-bottom: none;
    }

    :nth-child(2n) {
        height: 750px;
    }

`;

export const CourseColumnContent = styled.div`
    width: 100%;
    justify-content: center;
    display:flex;
`



export const CourseH1 = styled.h1`
    color: white;
    font-size: 1.25rem;
    margin: 24px 0px;
    text-align: center;
    width: 100%;

`;

export const CourseP = styled.p`
    margin-top: 1em;
    color: white;
    font-size: 1em;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
        text-align: center;
    }

`;

export const CourseArt = styled.img`
    margin: 0px;
    width: 64px;
    z-index:5;
`;
