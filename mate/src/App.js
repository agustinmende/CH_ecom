import React, {useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header';

//import NavBar from './components/NavBar';
//import TopBar from './components/TopBar';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {CartProvider} from "./context/CartContext";
import {getFirestore} from "./configs/Firebase";
import Checkout from "./components/Checkout";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Orders from "./components/Orders";
import Pagos from "./components/Pagos";
import Contacto from "./components/Contacto";
import About from "./components/About";




function App() {

  useEffect(() => {
    const db = getFirestore();
    const categorias = db.collection('category');

    categorias.get().then(res=> {
      if(res.size > 0) {
        //res.docs.map(d => console.log({id: d.id, ...d.data()}))
        ;}
    })
  }, [])


 // const [items, setItems] = useState([]);

  const script = document.createElement("script");    
  script.async = true;    
  script.src = "components/json-to-firestore.js";

  return (

    

    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/checkoutsuccess">
              <CheckoutSuccess />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/pagos">
              <Pagos />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
