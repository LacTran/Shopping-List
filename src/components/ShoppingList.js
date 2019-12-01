import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import ItemDetails from './ItemDetails';

import styled from 'styled-components';

const ShoppingListWrapper = styled.div`
    margin: 20px;
`;

const ShoppingListUl = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const ShoppingList = () => {
    const { items } = useContext(ItemContext);
    return (
        <ShoppingListWrapper>
            <ShoppingListUl data-testid="shopping-list-ul">
                {items.map((item, key) => {
                    return <ItemDetails item={item} key={key} />
                })}
            </ShoppingListUl>
        </ShoppingListWrapper>
    );
};

export default ShoppingList;