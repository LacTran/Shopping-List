import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import ItemForm from './components/ItemForm';
import ItemContextProvider from './contexts/ItemContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background: #777;
  margin: 20px auto;
  width: 90%;
  max-width: 700px;
  color: #333;
`;



function App() {
  return (
    <Router>
      <AppWrapper>
        <ItemContextProvider>
          <Navbar />
          <ShoppingList />
          <ItemForm />
        </ItemContextProvider>
      </AppWrapper>
    </Router>
  );
}

export default App;
