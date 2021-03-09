import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h1>Mate</h1>
        </div>
        <NavBar />
      </>
    );
  }
}

export default App;
