import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import {
    FAKE_USER_NAME,
    FAKE_ITEM_ENTITY,
    FAKE_ITEM_LIST
} from './fixtures/item';
import App from '../App';

it('render the form', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapShot();
})
