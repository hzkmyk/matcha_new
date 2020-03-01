import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';

class MyRoute extends Component {
	render() {
		return(
			<Router history={createBrowserHistory()}>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={SignUp} />
			</Router>
		);
	}
}

export default MyRoute;