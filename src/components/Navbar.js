import React, { useContext } from 'react';

import { ItemContext } from '../contexts/ItemContext';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
    padding: 10px 20px;
    text-align: center;
    background: #eee;
`;

const NavbarLogo = styled.div`
    width: 33%;
    display: inline-block;
`;

const AppLogo = styled.img`
    width: 100px;
    height: 100px;
`;

const NavbarTitle = styled.div`
    display: inline-block;
    width: 66%;
`;

const NavbarHeading = styled.h1`
    position: absolute;
    margin: 0 auto;
    transform: translateY(-150%)
`;

const Navbar = () => {
    const { items } = useContext(ItemContext)
    return (
        <NavbarWrapper>
            <NavbarLogo>
                <AppLogo src="https://source.unsplash.com/random/100x100" alt="Logo" />
            </NavbarLogo>
            <NavbarTitle>
                <NavbarHeading>My Shopping List</NavbarHeading>
            </NavbarTitle>
            <p>You have {items.length} items on shopping list </p>
        </NavbarWrapper>
    );
};

export default Navbar;