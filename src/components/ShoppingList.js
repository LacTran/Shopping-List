import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import ItemDetails from './ItemDetails';
import EditedItem from './EditedItem';

import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const ShoppingListWrapper = styled.div`
    margin: 20px;
`;

const ShoppingListUl = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const ShoppingList = () => {
    const { items, isInEditMode, editedItem } = useContext(ItemContext);
    return (
        <Switch>
            {isInEditMode ?
                <Route path="/edit-item/:id" >
                    <ShoppingListUl>
                        <EditedItem item={editedItem} />
                    </ShoppingListUl>
                </Route>
                :
                <Route path="/" exact>
                    <ShoppingListWrapper>
                        <ShoppingListUl data-testid="shopping-list-ul">
                            {items.map((item, key) => {
                                return <ItemDetails item={item} key={key} />
                            })}
                        </ShoppingListUl>
                    </ShoppingListWrapper>
                </Route>
            }
        </Switch>
    );
};

export default ShoppingList;