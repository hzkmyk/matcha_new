import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}

	render() {
		return (
			<div className="loginheader">
				<div id="title"><Link to="/">MATCH<span class="red">A</span></Link></div>
				<div></div>
				<div className="login">
					<form>
						<input
							type="text"
							placeholder="Username"
						/>
						<input
							type="password"
							placeholder="Password"
						/>
						<button type="submit">Log In to Matcha</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;