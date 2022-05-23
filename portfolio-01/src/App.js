import React, { useState, useEffect, Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import axios from 'axios';
import './App.css';

const store = ConfigureStore();

function IPLogger() {

  let currentIP;

  fetch('https://extreme-ip-lookup.com/json/?key=uvYsgUFgas6lNLr4hvoA')
    .then(res => res.json())
    .then(data => currentIP = data)

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://extreme-ip-lookup.com/json/?key=uvYsgUFgas6lNLr4hvoA')
    .then((res) => {
      axios({
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        url: 'https://api.mailgun.net/v3/sandboxf3b5bf88576b4ae0af883af24ec8440e.mailgun.org/messages',
        auth: {
          username: 'api',
          password: '6692fea59b7d25d5c28ccb3318c6aaff-8d821f0c-696a76be'
        },
        params: {
          from: 'bkp.dev postmaster@sandboxf3b5bf88576b4ae0af883af24ec8440e.mailgun.org',
          to: 'burtonparker@gmail.com',
          subject: `IP ADDRESS LOGGED: ${Date()}`,
          text: JSON.stringify(currentIP),
        },
      });
    })
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, []);

  return (
    ''
  )
}

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
            <div className="App">
              <IPLogger />
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
      );
  };
}

export default App;
