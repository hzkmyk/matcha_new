import React, { Component } from 'react';
const { resetPassRequest } = require('../matcha_pb');

export default class ResetPassword extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newPass1: '',
			newPass2: ''
		}
	}

	resetPass = () => {
		const request = new resetPassRequest();
		const pathArray = window.location.search;
		const urlParams = new URLSearchParams(pathArray);
		const updatedEmail = urlParams.get('email');
		const updatedHash = urlParams.get('hash');
		request.setEmail(updatedEmail);
		request.setHash(updatedHash);
		request.setNewpass(this.state.newPass2);
		window.FPC.resetPassword(request, {}, (err, reply) => {
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
			<div>
				<form
					onSubmit={e => {
						e.preventDefault()
						if (this.state.newPass1 === this.state.newPass2) {
							console.log(this.state.newPass2);
							this.resetPass()
						} else {
							return 'Passwords don\'t match =('
						}
					}}
				>
					<input
						required
						id="resetpass"
						type="password"
						placeholder="New Password"
						value={this.state.newPass1}
						onChange={e => this.setState({ newPass1: e.target.value })}
					/>
					<input
						required
						id="resetpassconfirm"
						type="password"
						placeholder="Confirm New Password"
						value={this.state.newPass2}
						onChange={e => this.setState({ newPass2: e.target.value })}
					/>
					<button
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}