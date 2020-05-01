import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
const { empty } = require('../matcha_pb');

class LoggedHeader extends Component {
	readFeed = () => {
		console.log(`called`);
		const request = new empty();
		const uid = this.props.cookies.get('uid');
		const temp = this.props.cookies.get('session_id');
		const metaData = {
			'user_id': uid,
			'session_id': temp
		}
		const stream = window.Aclient.test2(request, metaData);
		stream.on('data', function(response) {
			console.log(response);
		});
		stream.on('error', function(err) {
			console.log(`error: ${err}`);
		});
	}

	componentDidMount() {
		this.readFeed();
	}

	render() {
		return (
			<div></div>
		)
	}
}

export default withCookies(LoggedHeader);