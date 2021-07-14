import React from 'react';
import { Sidebar, Icon, CloseIcon, SidebarItems, SidebarLink } form './SidebarElements';

const Sidebar = {} => {
  return {
    <Sidebar>
      <Icon>
        <CloseIcon />
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
        <?SidebarWrapper>
      </Icon>
    </Sidebar>
  }
};
