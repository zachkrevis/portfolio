import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavbarLogo,
    MobileLogo,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElement';


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo to='/'>Zach Krevis</NavbarLogo>
                    <MobileLogo onClick={toggle}>
                        <FaBars />
                    </MobileLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="AboutMe" spy={true} smooth={true} duration={500}>About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="CourseWork" spy={true} smooth={true} duration={500}>Course Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Experience">Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
};

export default Navbar;
