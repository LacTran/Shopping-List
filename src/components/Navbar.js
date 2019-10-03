import React, { useContext } from 'react';

import { ItemContext } from '../contexts/ItemContext';

const Navbar = () => {
    const { items } = useContext(ItemContext)
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="https://source.unsplash.com/random/100x100" alt="Logo"/>
            </div>
            <div className="navbar-title">
                <h1>My Shopping List</h1>
            </div>
            <p>You have {items.length} items on shopping list </p>
        </div>
    );
};

export default Navbar;