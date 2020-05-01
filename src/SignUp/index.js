import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import './index.css';
const { createRequest } = require('../matcha_pb');


class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			username: '',
			emailAdress: '',
			password: '',
			confirmPassword: ''
		};
	}
	
	createAUser = () => {
		const request = new createRequest();
		request.setFirstname(this.state.firstName);
		request.setLastname(this.state.lastName);
		request.setUsername(this.state.username);
		request.setEmail(this.state.emailAdress);
		request.setPassword(this.state.password);
		window.CAC.create(request, {}, (err, reply) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
			} else {
				console.log(reply.getMessage());
				this.props.history.push('/pleaseverify');
			}
		})
	}

	passwordMatches = (p1, p2) => {
		if (p1 && p2 && p1 === p2) {
			return 'passwords matched =)';
		} else if (p1 && p2 && p1 !== p2) {
			return 'passwords do not match =(';
		}
	}

	render() {
		return (
			<div className="signuppage">
				<header>
					<div>MATCHA</div>
				</header>
				<div className="signupmain">
					<div className="formpart">
						<div id="signuplogo">MATCH<span className="red">A</span></div>
						<div id="getstarted">Get Started</div>
						<form
							onSubmit={e => {
								e.preventDefault();
								if (this.state.password === this.state.confirmPassword) {
									this.createAUser();
								}
						}}
						>
							<input
								required
								type="text"
								placeholder="First Name"
								value={this.state.firstName}
								onChange={e => this.setState({ firstName: e.target.value })}
							/>
							<input
								required
								type="text"
								placeholder="Last Name"
								value={this.state.lastName}
								onChange={e => this.setState({ lastName: e.target.value })}
							/>
							<input
								required
								type="text"
								placeholder="Username"
								value={this.state.username}
								onChange={e => this.setState({ username: e.target.value })}
							/>
							<input
								required
								type="email"
								placeholder="Email Adress"
								value={this.state.emailAdress}
								onChange={e => this.setState({ emailAdress: e.target.value })}
							/>
							<input
								required
								type="password"
								placeholder="Password"
								value={this.state.password}
								onChange={e => this.setState({ password: e.target.value })}
							/>
							<input
								required
								type="password"
								placeholder="Confirm Password"
								value={this.state.confirmPassword}
								onChange={e => {
									this.setState({ confirmPassword: e.target.value })
								}}
							/>
							{this.passwordMatches(this.state.password, this.state.confirmPassword)}
							<button
								id="signupsubmit"
								type="submit"
							>
								Sign Up
							</button>
						</form>
					<div className="agree">By signing up, you agree to our Terms , Data Policy and Cookies Policy.</div>
					<div className="existinguser">Already have an account? <Link to='/login'>Login</Link></div>
					</div>
				</div>
				<footer>
					<div>© 2020 MATCHA INC.</div>
				</footer>
			</div>
		);
	}
}

export default withCookies(SignUp);