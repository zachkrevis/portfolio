import React from 'react';
import './SidebarElements.scss';
import { Link } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

const Sidebar = ({isOpen, toggle}) => {

  return (
    <aside className={`SidebarContainer ${(isOpen) ? "open" : "closed" } `}>
      <div className="Icon" onClick={toggle}>
        <FaTimes className='Close'/>
      </div>
      <div className="SidebarWrapper">
        <div className="SidebarItems">
          <Link className="SidebarLink" to="AboutContainer" spy={true} smooth={true} duration={500} onClick={toggle}>
            About Me
          </Link>

          <Link className="SidebarLink" to="Skills" spy={true} smooth={true} duration={500} onClick={toggle}>
            Skills
          </Link>

          <Link className="SidebarLink" to="ProjectsContainer" spy={true} smooth={true} duration={500} onClick={toggle}>
            Projects
          </Link>

          <Link className="SidebarLink" to="ContactMe" spy={true} smooth={true} duration={500} onClick={toggle}>
            Contact
          </Link>

        </div>
      </div>
    </aside>
  )
};

export default Sidebar;
