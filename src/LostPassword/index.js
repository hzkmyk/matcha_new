import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const { forgotPasswordClient } = require('../matcha_grpc_web_pb');
const { sendEmailRequest } = require('../matcha_pb');

class LostPasswod extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		}
	}

	sendResetPasswordEmail = () => {
		const client = new forgotPasswordClient('http://192.168.43.23:8080');
		const request = new sendEmailRequest();
		request.setEmail(this.state.email);
		client.sendEmail(request, {}, (err, reply) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
			} else {
				console.log(reply.getMessage());
			}
		})
	}

	render() {
		return (
			<div className="forgotpasswordpage">
				<header>
					<div>MATCHA</div>
				</header>
				<div className="forgotpasswordbody">
					<div className="forgotpasswordcontents">
						<div>Forgot Password?</div>
						<form
							onSubmit={e => {
								e.preventDefault()
								this.sendResetPasswordEmail()
							}}
						>
							<label htmlFor="emailforlostpass">Enter your email address to reset your password.</label>
							<input
								required
								id="emailforlostpass"
								type="email"
								placeholder="Email Address"
								value={this.state.email}
								onChange={e => this.setState({ email: e.target.value })}
							/>
							<button
								type="submit"
							>
								Send
							</button>
						</form>
						<Link to="/login">Go Back to Login</Link>
					</div>
				</div>
				<footer>
					<div>© 2020 MATCHA INC.</div>
				</footer>
			</div>
		)
	}
}

export default LostPasswod;