import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import useForm from 'react-hook-form';

const ItemForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const { addItem } = useContext(ItemContext);
    const [name, setName] = useState('')
    const [entity, setEntity] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        addItem(name, entity);

        setName('');
        setEntity('');
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Add new products</h1>
            <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="itemName"
                ref={register({ required: true, minLength: 2, maxLength: 20 })}
            />
            <input
                type="number"
                placeholder="Item entity"
                value={entity}
                onChange={(e) => setEntity(e.target.value)}
                name="itemEntity"
                ref={register({ required: true, min: 1, max: 50 })}
            />
            <input type="submit" value="Add Item" />
            {errors.itemName && errors.itemName.type === 'required' && <p>Item's name is required</p>}
            {errors.itemName && errors.itemName.type === 'minLength' && <p>Item's name has minimum length of 2</p>}
            {errors.itemName && errors.itemName.type === 'maxLength' && <p>Item's name has maximum length of 20</p>}
            {errors.itemEntity && errors.itemEntity.type === 'required' && <p>Item's entity is required</p>}
            {errors.itemEntity && errors.itemEntity.type === 'min' && <p>Item's entity has minimum value of 1</p>}
            {errors.itemEntity && errors.itemEntity.type === 'max' && <p>Item's entity has minimum value of 50</p>}
        </form>
    );
};

export default ItemForm;