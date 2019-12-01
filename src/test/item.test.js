import React from 'react';

import MutationObserver from 'mutation-observer';
global.MutationObserver = MutationObserver;

import { render, fireEvent, getByPlaceholderText, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { FAKE_ITEM_NAME, FAKE_ITEM_ENTITY, FAKE_ITEM_LIST } from './fixtures/item'

import ItemForm from '../components/ItemForm';
import ItemContextProvider from '../contexts/ItemContext';
import ShoppingList from '../components/ShoppingList';
import { BrowserRouter as Router } from 'react-router-dom'

it('user adds item on submitting the form', () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<ItemForm />, { wrapper: ItemContextProvider });
    act(() => {
        userEvent.type(getByPlaceholderText('Item name'), FAKE_ITEM_NAME)
    })
    expect(getByPlaceholderText('Item name')).toHaveValue(FAKE_ITEM_NAME)
    act(() => {
        userEvent.type(getByPlaceholderText('Item entity'), FAKE_ITEM_ENTITY)
    })
    console.log(getByPlaceholderText('Item name').value)
    expect(getByPlaceholderText('Item entity')).toHaveValue(parseInt(FAKE_ITEM_ENTITY))
    // expect(value).toXYZ(target)
})


it('should the add button be hit', () => {
    const { getByTestId } = render(<ItemForm />, { wrapper: ItemContextProvider });
    const onSubmit = jest.fn(e => e.preventDefault());
    act(() => {
        fireEvent.click(getByTestId('item-form-submit'))
    })
    // expect(getByTestId('item-form')).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledTimes(1);
})


it('should add new item to the list', () => {
    function wrapper({ children }) {
        return <Router><ItemContextProvider>{children}</ItemContextProvider></Router>
    }
    const { getByText, getByPlaceholderText, queryByText, getByTestId, rerender } = render(<><ShoppingList /><ItemForm /></>, { wrapper });
    const shoppingListCount = getByTestId("shopping-list-ul").childElementCount;
    const obSubmit = jest.fn(e => e.preventDefault());
    getByTestId('item-form-submit').dispatchEvent(new MouseEvent('click'));
    act(() => {
        userEvent.type(getByPlaceholderText('Item name'), FAKE_ITEM_NAME)
        userEvent.type(getByPlaceholderText('Item entity'), FAKE_ITEM_ENTITY)
        userEvent.click(getByTestId('item-form-submit').closest('button'))
        // fireEvent.submit(getByTestId('item-form'));
        // fireEvent.submit(getByTestId('submit'));
        // fireEvent.submit()
    })
    // rerender();
    // console.log(getByTestId("shopping-list-ul").lastElementChild.innerHTML)
    console.log(getByTestId("shopping-list-ul").childElementCount)
    expect(obSubmit).toHaveBeenCalled();
    expect(getByTestId("shopping-list-ul").childElementCount).toBe(shoppingListCount + 1)
})
