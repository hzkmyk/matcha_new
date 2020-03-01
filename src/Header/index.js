import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div id="title">MATCHA</div>
				<div className="header-login"><Link to="login">Login</Link></div>
			</div>
		);
	}
}

export default Header;