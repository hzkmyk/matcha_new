import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import './index.css'

class Success extends Component {
	render() {
		return (
			<div className="successpage">
				<header>
					<div>MATCHA</div>
				</header>
				<div className="successmain">
					<div>You Are All Set =)</div>
					<div><Link to="/login">Login</Link> and start enjoying Matcha!</div>
				</div>
				<footer>
					<div>© 2020 MATCHA INC.</div>
				</footer>
			</div>
		)
	}
}

export default withCookies(Success);