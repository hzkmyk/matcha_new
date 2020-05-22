import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const { AccountClient } = require('./matcha_grpc_web_pb');
const { createAccountClient } = require('./matcha_grpc_web_pb');
const { forgotPasswordClient } = require('./matcha_grpc_web_pb');

window.Aclient = new AccountClient('http://10.10.154.197:8080');
window.CAC = new createAccountClient('http://10.10.154.197:8080');
window.FPC = new forgotPasswordClient('http://10.10.154.197:8080');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
