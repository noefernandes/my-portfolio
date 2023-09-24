import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import logo from '../assets/logo-no-background.svg';
import menuHambuger from '../assets/hamburger-icon.svg';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleToggle = () => {
        setIsVisible(!isVisible);
        console.log(isVisible);
    }

    return (
        <>
            <Nav>
                <Logo>
                    <img src={logo} alt="" />
                </Logo>
                <NavList>
                    <ul>
                        <NavItem><NavLink>Projetos</NavLink></NavItem>
                        <NavItem><NavLink>Habilidades</NavLink></NavItem>
                        <NavItem><NavLink>Experiências</NavLink></NavItem>
                        <NavItem><NavLink>Formação</NavLink></NavItem>
                        <NavItem><NavLink>Contato</NavLink></NavItem>
                    </ul>
                </NavList>

                <MobileMenuIcon>
                    <button onClick={handleToggle}>
                        <img src={menuHambuger} />
                    </button>
                </MobileMenuIcon>
            </Nav>
            <MobileMenu isVisible={isVisible}>
                <ul>
                    <NavItemMobile><NavLink>Teste 1</NavLink></NavItemMobile>
                    <NavItemMobile><NavLink>Teste 2</NavLink></NavItemMobile>
                    <NavItemMobile><NavLink>Teste 3</NavLink></NavItemMobile>
                </ul>
            </MobileMenu>
        </>
    );
}

const Nav = styled.div`
    width: 100%;
    position: relative;
    background-color: #0666AC;
    display: flex;
    align-items: center;
    padding: 0rem 6rem;
    font-size: 10px;

    @media (max-width: 1440px){
        padding: 0rem 2rem;
    }
`;

const NavList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 8rem;
    margin-left: 60px;

    ul {
        width: 100%;
        display: flex;
        justify-content: center;
        list-style: none;
    }

    @media (max-width: 1440px){
        margin-left: 15px;
    }

    @media (max-width: 900px){
        display: none;
    }
`;

const NavItem = styled.li`
    width: 250px;
    text-align: center;

    @media (max-width: 1440px) {
        width: 150px;
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

const NavItemMobile = styled.li`
    @media not (max-width: 900px) {
        display: none;
    }
`;

const NavLink = styled.a`
    display: block;
    font-size: 1.5rem;
    color: #FFFFFF;
    font-weight: 500;
    padding: 1rem 4rem;
    width: inherit;

    @media (max-width: 1440px) {
        padding: 1rem 0.25rem;
    }

    @media (max-width: 900px) {
        display: block;

        cursor: pointer;
        background-color: #0666AC;
        color: #FFFFFF;      
    }

    &:hover {
        background-color: #FFFFFF;
        color: #0666AC;
    } 
`;

const MobileMenuIcon = styled.div`
    display: none;
    position: absolute;
    right: 0;
    margin-right: 5rem;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;

        img {
            height: 30px;
            width: 30px;
        }
    }

    @media (max-width: 900px) {
        display: block;
        align-self: center;
    }
`;

const MobileMenu = styled.div`
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
    width: 100%;
    color: #0666AC;

    ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;
    }

    ${NavItem} {
        display: block;
        padding-top: 1.2rem;
    }

    @media (min-width: 900px){
        display: none;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 80px;
    }
`;

export default NavBar;