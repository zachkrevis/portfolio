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

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo to='/'>Zach Krevis</NavbarLogo>
                    <MobileLogo>
                        <FaBars />
                    </MobileLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
