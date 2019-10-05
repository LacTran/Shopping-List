import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {

    const [isInEditMode, setEditMode] = useState(false);

    const [editedItem, setEditedItem] = useState('')

    const [items, setItems] = useState([])

    const addItem = (name, entity) => {
        setItems([...items, { name, entity, id: uuid() }])
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const getEditedItem = (item) => {
        setEditedItem(item);
    }

    const saveEditedItem = (editedItem) => {
        var newItems = items.filter(item => {
            return item.id !== editedItem.id
        })

        setItems([...newItems, editedItem])
    }




    useEffect(() => {
        // Math.floor(Math.random() * (max - min + 1) + min)
        const randomItemNameList = ['Apple', 'Banana', 'Burger', 'Bags', 'Amplifier', 'Car', 'Hotdog', 'Ghost', 'House', 'Chocolate', 'Ruler', 'Tape', 'Laptop', 'Kiwi', 'Watermelon']
        let newItems = [];
        // console.log(randomItemNameList[Math.floor(Math.random() * 15 + 1)]) //random name in product lists
        for (let i = 0; i < (Math.floor(Math.random() * 9 + 5)); i++) {
            newItems.push({
                name: randomItemNameList[Math.floor(Math.random() * 15)], //random product name
                entity: Math.floor(Math.random() * 50 + 1), // random entity from 1-50
                id: uuid()
            })
        }
        setItems([...newItems])
    }, [])

    return (
        <ItemContext.Provider value={{ items, setItems, isInEditMode, setEditMode, addItem, removeItem, editedItem, getEditedItem, saveEditedItem }}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;