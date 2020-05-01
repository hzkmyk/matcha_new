import React, { Component } from 'react';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import MyRoute from '../Route';
// import LoggedHeader from '../LoggedHeader';

class App extends Component {
  render() {
    return(
      <CookiesProvider>
        <MyRoute />
        {/* <LoggedHeader /> */}
      </CookiesProvider>
    );
  }
}

export default App;
