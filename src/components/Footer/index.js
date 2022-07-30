import React from 'react';
import './footer_style.scss';
import {BsGithub, BsLinkedin} from 'react-icons/bs';



const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footerMenu">
                    <a href="https://github.com/ZachKrevis" target="_blank" rel="noreferrer"><BsGithub className="footerButton"/></a>
                    <a href="https://LinkedIn.com/in/ZachKrevis" target="_blank" rel="noreferrer"><BsLinkedin className="footerButton"/></a>
                </div>
            </div>
        </>
    )
};

export default Footer;
