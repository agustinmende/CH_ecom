import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
//import productos from "./components/productos.json";

function App() {
  const [items, setItems] = useState([]);
  return (

<div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
          <ItemListContainer />
          </Route>
          <Route  path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
   /*<div className="App">
      <NavBar />
      <ItemListContainer items={items} greeting="Seleccioná tu producto"/>
    </div>
  */

  );
}

export default App;
