import React, { Component } from 'react';
const { AccountClient } = require('../matcha_grpc_web_pb');
const { verifyRequest } = require('../matcha_pb');

class VerifyNewEmail extends Component {
	UNSAFE_componentWillMount() {
		const client = new AccountClient('http://10.43.1.110:8080');
		const request = new verifyRequest();
		const pathArray = window.location.search;
		const urlParams = new URLSearchParams(pathArray);
		const updatedEmail = urlParams.get('email');
		const updatedHash = urlParams.get('hash');
		request.setEmail(updatedEmail);
		request.setHash(updatedHash);
		client.verifyNewEmail(request, {}, (err, reply) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
				this.props.history.push('./invalid');
			} else {
				console.log(reply.getMessage());
				// this.props.history.push('./initial_profile');
			}
		})
	}

	render() {
		return (
			<div></div>
		)
	}
}

export default VerifyNewEmail;