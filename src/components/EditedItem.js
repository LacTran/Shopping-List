import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';


const EditedItem = ({ item }) => {

    const { setEditMode, saveEditedItem } = useContext(ItemContext);

    const theNameInput = React.createRef()
    const theEntityInput = React.createRef();

    const changeEditMode = () => {
        setEditMode(false)
    }

    const handleSaveEditedItem = () => {
        let newItem = {
            name: theNameInput.current.value,
            entity: theEntityInput.current.value,
            id: item.id
        }
        saveEditedItem(newItem);
        setEditMode(false)
    }

    return (
        <div className="edit-inputs">
            <input
                type="text"
                defaultValue={item.name}
                ref={theNameInput}
            />
            <input
                type="text"
                defaultValue={item.entity}
                ref={theEntityInput}
            />
            <button onClick={changeEditMode}>X</button>
            <button onClick={handleSaveEditedItem}>OK</button>
        </div>
    );
};

export default EditedItem;