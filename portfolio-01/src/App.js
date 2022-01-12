import React, { Component } from 'react';
import Main from './components/MainComponent';
import Product from './components/ProductComponent';
import { BrowserRouter } from 'react-router-dom';
import { PRODUCTS } from './shared/products';
import './App.css';

class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
      </BrowserRouter>
      );
  };
}

export default App;
