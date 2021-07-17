import styled from 'styled-components';
import { Link as link_router } from 'react-router-dom';
import { Link as link_scroll } from 'react-scroll';


export const Nav = styled.nav`
  background: BLACK;
  height: 80px;
  /*margin-top: -80px;*/
  display: flex;
  justify-content: center;
  font-size: 1rem;
  postion: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px
  z-index: 1;
  width: 100%;
  padding: 0 24x;
  max-width: 1100px;
  `;

export const NavbarLogo = styled(link_router)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileLogo = styled.div` 
  dispaly:none;

  @media screen and (max-width:768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(link_scroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-align: none;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
      border-bottom: 3px solid #01bf71;
  }
`;