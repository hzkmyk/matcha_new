import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
const { AccountClient } = require('../matcha_grpc_web_pb');
const { User } = require('../matcha_grpc_web_pb');

class UpdateEmail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newEmail: ''
		}
	}

	updateEmailAdress = () => {
		const client = new AccountClient('http://10.43.1.110:8080');
		const request = new User();
		request.setEmail(this.state.newEmail);
		const uid = this.props.cookies.get('uid');
		const temp = this.props.cookies.get('session_id');
		const metaData = {
			'user_id': uid,
			'session_id': temp
		}
		client.updateUser(request, metaData, (err, response) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
			} else {
				console.log(response.getMessage());
			}
		})
		
	}

	render() {
		return (
			<div>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateEmailAdress();
					}}
				>
					<input
						required
						type="email"
						placeholder="New Email Adress"
						value={this.state.newEmail}
						onChange={e => this.setState({ newEmail: e.target.value })}
					/>
					<button
						type="submit"
					>submit</button>
				</form>
			</div>
		)
	}
}

export default withCookies(UpdateEmail);