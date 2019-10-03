import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemDetails = ({ item }) => {

    const { removeItem, setEditMode, getEditedItem } = useContext(ItemContext)

    const changeEditMode = () => {
        setEditMode(true);
        getEditedItem(item)
    }

    return (
        <li className="item">
            <div className="item-feature item-name" onDoubleClick={changeEditMode}>{item.name}</div>
            <div className="item-feature item-entity" onDoubleClick={changeEditMode}>{item.entity}</div>
            <button className="delete" onClick={() => removeItem(item.id)}>X</button>
        </li>
    );
};

export default ItemDetails;