import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import useForm from 'react-hook-form';

import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Form = styled.form``;

const FormInput = styled.input`
    display: inline-block;
    padding: 10px   ;
    box-sizing: border-box;
    margin: 5px;
    border-right: solid black 1px;
    width: 30%;
    background: #eee;
    color: #333;
    &:focus{
        outline: none;
        border-bottom: 1px solid black;
    }
`;

const ConfirmButton = styled.input`
    display: inline-block;
    border: 0;
    background: #eee;
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
    box-sizing: border-box;
    &:focus{
        outline: none;
        border-bottom: 1px solid black;
    }
`;

const CancelButton = styled.button`
    display: inline-block;
    border: 0;
    background: #eee;
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
    box-sizing: border-box;
    &:focus{
        outline: none;
        border-bottom: 1px solid black;
    }
`;

const EditedItem = ({ item, history }) => {
    const { register, handleSubmit, errors } = useForm();
    const { setEditMode, saveEditedItem } = useContext(ItemContext);
    const changeEditMode = () => {
        setEditMode(false);
        history.push('/');
    }
    const handleSaveEditedItem = (data) => {
        let newItem = {
            name: data.itemName,
            entity: data.itemEntity,
            id: item.id
        }
        saveEditedItem(newItem);
        setEditMode(false);
        history.push('/')
    }
    return (
        <Form onSubmit={handleSubmit(handleSaveEditedItem)}>
            <FormInput
                type="text"
                defaultValue={item.name}
                ref={register({ required: true, minLength: 2, maxLength: 20 })}
                name="itemName"
            />
            <FormInput
                type="number"
                defaultValue={item.entity}
                ref={register({ required: true, min: 1, max: 50 })}
                name="itemEntity"
            />
            <CancelButton type="button" onClick={changeEditMode}>X</CancelButton>
            <ConfirmButton type="submit" value="OK" />
            {errors.itemName && errors.itemName.type === 'required' && <p>Item's name is required</p>}
            {errors.itemName && errors.itemName.type === 'minLength' && <p>Item's name has minimum length of 2</p>}
            {errors.itemName && errors.itemName.type === 'maxLength' && <p>Item's name has maximum length of 20</p>}
            {errors.itemEntity && errors.itemEntity.type === 'required' && <p>Item's entity is required</p>}
            {errors.itemEntity && errors.itemEntity.type === 'min' && <p>Item's entity has minimum value of 1</p>}
            {errors.itemEntity && errors.itemEntity.type === 'max' && <p>Item's entity has minimum value of 50</p>}
        </Form>
    );
};

export default withRouter(EditedItem);