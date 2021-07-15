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
          <SidebarLink to="about">
            About me
          </SidebarLink>

          <SidebarLink to="projects">
            Projects
          </SidebarLink>
  
          <SidebarLink to="contact">
            Contact
          </SidebarLink>

        </SidebarItems>
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;
