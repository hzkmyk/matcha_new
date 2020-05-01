import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import './index.css';
const { verifyRequest } = require('../matcha_pb');

class Verify extends Component {
	componentDidMount() {
		const request = new verifyRequest();
		const pathArray = window.location.search;
		const urlParams = new URLSearchParams(pathArray);
		const updatedEmail = urlParams.get('email');
		const updatedHash = urlParams.get('hash');
		request.setEmail(updatedEmail);
		request.setHash(updatedHash);
		window.CAC.verify(request, {}, (err, reply) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
				this.props.history.push('./invalid');
			} else {
				console.log(reply.getMessage());
				this.props.cookies.set('missing_profile', true, { path: '/' });
				this.props.history.push('./success');
			}
		})
	}

	render() {
		return (
			<div></div>
		)
	}
}

export default withCookies(Verify);