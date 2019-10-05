import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import useForm from 'react-hook-form';


const EditedItem = ({ item }) => {

    const { register, handleSubmit, errors } = useForm();

    const { setEditMode, saveEditedItem } = useContext(ItemContext);

    // const theNameInput = React.createRef()
    // const theEntityInput = React.createRef();

    const changeEditMode = () => {
        setEditMode(false)
    }

    const handleSaveEditedItem = (data) => {
        let newItem = {
            name: data.itemName,
            entity: data.itemEntity,
            id: item.id
        }
        saveEditedItem(newItem);
        setEditMode(false)
    }

    return (
        <div className="edit-inputs">
            <form onSubmit={handleSubmit(handleSaveEditedItem)}>
                <input
                    type="text"
                    defaultValue={item.name}
                    ref={register({ required: true, minLength: 2, maxLength: 20 })}
                    name="itemName"
                />
                <input
                    type="number"
                    defaultValue={item.entity}
                    ref={register({ required: true, min: 1, max: 50 })}
                    name="itemEntity"
                />
                <button type="button" onClick={changeEditMode}>X</button>
                <input type="submit" value="OK" />
                {errors.itemName && errors.itemName.type === 'required' && <p>Item's name is required</p>}
                {errors.itemName && errors.itemName.type === 'minLength' && <p>Item's name has minimum length of 2</p>}
                {errors.itemName && errors.itemName.type === 'maxLength' && <p>Item's name has maximum length of 20</p>}
                {errors.itemEntity && errors.itemEntity.type === 'required' && <p>Item's entity is required</p>}
                {errors.itemEntity && errors.itemEntity.type === 'min' && <p>Item's entity has minimum value of 1</p>}
                {errors.itemEntity && errors.itemEntity.type === 'max' && <p>Item's entity has minimum value of 50</p>}
            </form>
        </div>
    );
};

export default EditedItem;