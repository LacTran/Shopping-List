import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import ItemForm from './components/ItemForm';
import ItemContextProvider from './contexts/ItemContext';


function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Navbar />
        <ShoppingList />
        <ItemForm />
      </ItemContextProvider>
    </div>
  );
}

export default App;
