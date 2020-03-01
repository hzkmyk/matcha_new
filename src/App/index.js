import React, { Component } from 'react';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import MyRoute from '../Route';

class App extends Component {
  render() {
    return(
      <CookiesProvider>
        <MyRoute />
      </CookiesProvider>
    );
  }
}

export default App;
