import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import useForm from 'react-hook-form';

import styled from 'styled-components';

const Form = styled.form`
    padding: 20px;
`;

const FormHeading = styled.h1`
    color: #eee;
`;

const FormInput = styled.input`
    display: inline-block;
    padding: 10px   ;
    box-sizing: border-box;
    margin: 5px;
    background: #5f5f5f;
    color: #fff;
    border: 0;
    &::placeholder{
        color: #fff;
    }
    &:focus{
        outline: none;
        border-bottom: 1px solid black;
    }
`;
const FormSubmitInput = styled.input`
    display: inline-block;
    padding: 10px 20px;
    box-sizing: border-box;
    margin: 5px;
    width: 15%;
    background: #eee;
    border: 0;
    margin-left: 35px;
    cursor: pointer;
    &:focus{
        outline: none;
        border-bottom: 1px solid black;
    }
`;

const ItemForm = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const { addItem } = useContext(ItemContext);
    const onSubmit = (data) => {
        addItem(data.itemName, data.itemEntity);
        reset({
            itemName: "",
            itemEntity: ""
        });
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)} data-testid="item-form">
            <FormHeading>Add new products</FormHeading>
            <FormInput
                type="text"
                placeholder="Item name"
                name="itemName"
                ref={register({ required: true, minLength: 2, maxLength: 20 })}
            />
            <FormInput
                type="number"
                placeholder="Item entity"
                name="itemEntity"
                ref={register({ required: true, min: 1, max: 50 })}
            />
            <FormSubmitInput data-testid="item-form-submit" type="submit" value="Add Item" />
            {errors.itemName && errors.itemName.type === 'required' && <p>Item's name is required</p>}
            {errors.itemName && errors.itemName.type === 'minLength' && <p>Item's name has minimum length of 2</p>}
            {errors.itemName && errors.itemName.type === 'maxLength' && <p>Item's name has maximum length of 20</p>}
            {errors.itemEntity && errors.itemEntity.type === 'required' && <p>Item's entity is required</p>}
            {errors.itemEntity && errors.itemEntity.type === 'min' && <p>Item's entity has minimum value of 1</p>}
            {errors.itemEntity && errors.itemEntity.type === 'max' && <p>Item's entity has minimum value of 50</p>}
        </Form>
    );
};

export default ItemForm;