import React, { } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import EditedItem from './components/EditedItem';
import ItemForm from './components/ItemForm';
import ItemContextProvider from './contexts/ItemContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './modules/auth/Login';
import Register from './modules/auth/Register';

const AppWrapper = styled.div`
  background: #777;
  margin: 20px auto;
  width: 90%;
  max-width: 700px;
  color: #333;
`;



function App() {
  // const { items } = useContext(ItemContext);
  // console.log(useContext(ItemContext))
  return (
    <Router>
      <AppWrapper>
        <ItemContextProvider>
          <Switch>
            <Route path="/login" render={props => <Login {...props} />} />
            <Route path="/register" render={props => <Register {...props} />} />
            <Route path="/" exact>
              <Navbar />
              <ShoppingList />
              <ItemForm />
            </Route>
            <Route path="/edit-item/:id" >
              {/* <EditedItem item={editedItem} /> */}
              <Navbar />
              <EditedItem />
            </Route>
          </Switch>
        </ItemContextProvider>
      </AppWrapper>
    </Router>
  );
}

export default App;
