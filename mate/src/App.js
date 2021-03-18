import React, { useState, useEffect } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import mockdb from "./components/mockdb.json";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockdb);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer items={items} greeting="Seleccioná tu producto"/>
    </div>
  );
}

export default App;
