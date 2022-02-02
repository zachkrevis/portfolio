import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarItems, SidebarLink, SidebarWrapper } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarItems>
          <SidebarLink to="AboutMe" spy={true} smooth={true} duration={500} onClick={toggle}>
            About me
          </SidebarLink>

          <SidebarLink to="CourseWork" spy={true} smooth={true} duration={500} onClick={toggle}>
            Course Work
          </SidebarLink>
  
          <SidebarLink to="experience" onClick={toggle}>
            Experience
          </SidebarLink>

          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>

        </SidebarItems>
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;
