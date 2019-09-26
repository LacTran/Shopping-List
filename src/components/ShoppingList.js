import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import ItemDetails from './ItemDetails';
import EditedItem from './EditedItem';

const ShoppingList = () => {
    const { items, isInEditMode, editedItem } = useContext(ItemContext);

    return (
        isInEditMode ?
            <ul>
                <EditedItem item={editedItem} />
            </ul>
            :
            <div className="shopping-list">
                <ul>
                    {items.map((item, key) => {
                        return <ItemDetails item={item} key={key} />
                    })}
                </ul>
            </div>
    );
};

export default ShoppingList;