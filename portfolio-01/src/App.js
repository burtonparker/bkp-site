import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

class App extends Component {
  render() {
      return (
            <div className="App">
              <Main />
            </div>
      );
  };
}

export default App;
