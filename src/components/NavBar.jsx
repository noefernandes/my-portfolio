import { styled } from 'styled-components';
import logo from '../assets/black-transparent.png';

const NavBar = () => {
    return (
        <Nav>
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <div>
                <Link href="#home">Home</Link>
                <Link href="#news">News</Link>
                <Link href="#contact">Contact</Link>
                <Link href="#about">About</Link>
            </div>
        </Nav>
    );
}

const Nav = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80px;
`;

const Link = styled.a`
    float: left;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    &:hover {
        background-color: #FFF;
        color: black;
    }

    &:active {
        background-color: #04AA6D;
        color: white;
    }
`;

const Logo = styled.div`
    width: 80px;
    height: auto;

    img {
        width: 100%;
        height: auto;
    }
`;

export default NavBar;