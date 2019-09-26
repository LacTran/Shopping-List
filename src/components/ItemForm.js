import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemForm = () => {

    const { addItem } = useContext(ItemContext);
    const [name, setName] = useState('')
    const [entity, setEntity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(name, entity);

        setName('');
        setEntity('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Item entity"
                value={entity}
                onChange={(e) => setEntity(e.target.value)}
                required
            />
            <input type="submit" value="Add Item" />
        </form>
    );
};

export default ItemForm;