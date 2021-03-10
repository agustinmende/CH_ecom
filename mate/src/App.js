import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h1>Mate</h1>
        </div>
        <NavBar />
        <ItemListContainer greeting="Seleccioná tu producto"/>
      </>
    );
  }
}

export default App;
