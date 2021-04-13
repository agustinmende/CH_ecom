import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {CartProvider} from "./context/CartContext";
import {getFirestore} from "./configs/Firebase";

function App() {


  useEffect(() => {
    const db = getFirestore();
    const categorias = db.collection('category');

    categorias.get().then(res=> {
      if(res.size > 0) {
        res.docs.map(d => console.log({id: d.id, ...d.data()})
        );}
    })
  }, [])


  const [items, setItems] = useState([]);

  const script = document.createElement("script");    script.async = true;    script.src = "components/json-to-firestore.js";

  return (

<div className="App">
<CartProvider>
<BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
