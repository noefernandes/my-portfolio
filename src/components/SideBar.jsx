import { styled } from "styled-components";

const size = {
    xs: '400px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '900px', // for tablets
    lg: '1280px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
}

export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
}

const SideBar = () => {
    return (
        <Holder class="sidenav">
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Clients</Link>
            <Link href="#">Contact</Link>
        </Holder>
    );
}

const Holder = styled.div`
    height: 100%;
    width: 160px;
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;

    @media ${device.sm} {
        padding-top: 15px;

        Link {
            font-size: 18px;
        }
    }
`;

const Link = styled.a`
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;

    &:hover {
        color: #f1f1f1;
    }
`;

export default SideBar;