import React, { useContext } from 'react';

import { ItemContext } from '../contexts/ItemContext';

const Navbar = () => {
    const { items } = useContext(ItemContext)
    return (
        <div className="navbar">
            <h1>My Shopping List</h1>
            <p>You have {items.length} items on shopping list </p>
        </div>
    );
};

export default Navbar;