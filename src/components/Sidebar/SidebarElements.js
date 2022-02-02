import styled from 'styled-components';
import { FaTimes }from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #5fc2af;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
    right: ${({ isOpen }) => ( isOpen ? '0' : '-100%')}; 
`;

export const CloseIcon = styled(FaTimes)`
    color: white;

`;

export const Icon = styled.div`
    position: absolute;
    top 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;
export const SidebarItems = styled.ul`
    display: grid;
    gris-template-colums: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    
    @media screen and (max-width: 480) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    color: fff;
    cursor: pointer;
    
    &:hover {
        color: black;
        transition: 0.2s ease-in-out;
    }
    
    
`;
