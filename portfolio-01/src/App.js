import React, { useState, useEffect, Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import axios from 'axios';
import './App.css';

const store = ConfigureStore();

function IPLogger() {
  //creating IP state
  const [ip, setIP] = useState('');

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
        url: 'https://api.mailslurp.com/sendEmail?apiKey=4f8a856a48c661e3719331db35c37447a3f9743c8e5642f47ac16f56a08c0e49',
        data: {
          senderId: '62230ce2-abaa-4f94-9dd1-caea384b63e0',
          to: '62230ce2-abaa-4f94-9dd1-caea384b63e0@mailslurp.com',
          subject: `IP ADDRESS LOGGED: ${Date()}`,
          body: JSON.stringify(currentIP),
        },
      });
    })
    setIP(res.data.IPv4)
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
