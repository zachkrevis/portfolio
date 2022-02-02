import styled from 'styled-components';
import { Link as link_router } from 'react-router-dom';
import { Link as link_scroll } from 'react-scroll';


export const Nav = styled.nav`
  background: #191919;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  postion: sticky;
  padding-bottom: 12px;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 52px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  `;

export const NavbarLogo = styled(link_router)`
  color: #5fc2af;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileLogo = styled.div` 
  display:none;

  @media screen and (max-width:768px) {
    display: flex;
    align-items: flex-end;
    list-style: none;
    text-align: left;
    color: #5fc2af;
    font-size: 1.8rem;
    margin-bottom: 2px;
  }
`;
 
export const NavMenu = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  text-align: left;
  margin-right: 24px;
  

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const NavItem = styled.li`
  height: 52px;
`;
export const NavLinks = styled(link_scroll)`
  color: #5fc2af;
  display: flex;
  align-items: flex-end;
  text-align: none;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  

  &.active {
      border-bottom: 3px solid #01bf71;
  }
`;