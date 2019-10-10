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
        // var newItems = items.filter(item => {
        //     return item.id !== editedItem.id
        // })
        // setItems([...newItems, editedItem])

        // var newItems = items.map(item => item === editedItem ? item.id === editedItem.id : item)
        var newItems = items.map(item => {
            return item.id === editedItem.id ? editedItem : item;
        })
        // console.log(newItems)

        setItems([...newItems])
    }




    useEffect(() => {
        // Math.floor(Math.random() * (max - min + 1) + min)
        const randomItemNameList = ['Apple', 'Banana', 'Burger', 'Bags', 'Amplifier', 'Car', 'Hotdog', 'Ghost', 'House', 'Chocolate', 'Ruler', 'Tape', 'Laptop', 'Kiwi', 'Watermelon']
        let newItems = [];
        // console.log(randomItemNameList[Math.floor(Math.random() * 15 + 1)]) //random name in product lists

        // ---IMPERATIVE---
        // for (let i = 0; i < (Math.floor(Math.random() * 9 + 5)); i++) {
        //     newItems.push({
        //         name:  randomItemNameList[Math.floor(Math.random() * 15)]  , //random product name
        //         entity: Math.floor(Math.random() * 50 + 1), // random entity from 1-50
        //         id: uuid()
        //     })
        // }

        // ---FUNCTIONAL---
        // const newItemArray = new Array(Math.floor(Math.random() * 9 + 5));  // newItemArray.lenth = random
        // const newItemArray = [...Array(Math.floor(Math.random() * 11 + 5))] // newItemArray[0] = {0: undefined, ... }
        newItems = [...Array(Math.floor(Math.random() * 11 + 5))].map((item) => {
            item = Object.assign({}, {
                name: randomItemNameList[Math.floor(Math.random() * 15)],
                entity: Math.floor(Math.random() * 50 + 1),
                id: uuid()
            })
            return item;
        })

        // newItemArray[0] = Object.assign({}, { name: 'a', entity: 3 })


        setItems([...newItems])
    }, [])

    return (
        <ItemContext.Provider value={{ items, setItems, isInEditMode, setEditMode, addItem, removeItem, editedItem, getEditedItem, saveEditedItem }}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;