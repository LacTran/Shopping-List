import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const ListedItem = styled.li`
    display: block;
    background: #eee;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0;
`;

const ItemNameWrapper = styled.div`
    display: inline-block;
    border: 1px solid black;
    border-radius: 3px;
    text-align: center;
    padding: 15px 0;
    box-sizing: border-box;
    font-size: 0.9rem;
    width: 60%;
    margin-right: 15px;
    font-weight: bold;
    color: #333;
`;

const ItemEntityWrapper = styled.div`
    display: inline-block;
    border: 1px solid black;
    border-radius: 3px;
    text-align: center;
    padding: 15px 0;
    box-sizing: border-box;
    font-size: 0.9rem;
    width: 30%;
    color: #3f3f3f;
`;

const DeleteButton = styled.button`
    font-weight: bold;
    font-size: 0.9rem;
    padding: 15px 5px;
    box-sizing: border-box;
    margin: 5px 10px;
    cursor: pointer;
`;

const ItemDetails = (props) => {
    const { item, history } = props
    const { removeItem, setEditMode, getEditedItem } = useContext(ItemContext)

    const changeEditMode = () => {
        setEditMode(true);
        getEditedItem(item);
        history.push(`/edit-item/${item.id}`)
    }
    return (
        <ListedItem>
            <ItemNameWrapper onDoubleClick={changeEditMode}>{item.name}</ItemNameWrapper>
            <ItemEntityWrapper onDoubleClick={changeEditMode}>{item.entity}</ItemEntityWrapper>
            <DeleteButton onClick={() => removeItem(item.id)}>X</DeleteButton>
        </ListedItem>
    );
};

export default withRouter(ItemDetails);