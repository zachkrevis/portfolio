import React from 'react';
import {FaBars} from 'react-icons/fa';
import './navbar_style.scss';

import { Link } from 'react-scroll';



const Navbar = ({toggle}) => {
    return (
        <>
            <nav>
                <div className='NavbarContainer'>
                    <Link className='NavH1' to='HeroContainer' spy={true} smooth={true} duration={500} offset={-80}>Zach Krevis</Link>
                    <div className='MobileLogo' onClick={toggle}>
                        <FaBars  />
                    </div>
                    <ul className='NavMenu'>
                        <li className='NavItem'>
                            <Link className="NavLink" to="AboutContainer" spy={true} smooth={true} duration={500} offset={-52} activeClass="active">About Me</Link>
                        </li>
                        <li className='NavItem'>
                            <Link className="NavLink" to="Skills" spy={true} smooth={true} duration={500} offset={-52} activeClass="active">Skills</Link>
                        </li>
                        <li className='NavItem'>
                            <Link className="NavLink" to="ContactMe" spy={true} smooth={true} duration={500} offset={-52} activeClass="active">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;
