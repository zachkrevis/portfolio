import styled from 'styled-components';
import { FaTimes }from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: 0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-int-out;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
`;