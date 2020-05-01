import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
// const { empty } = require('../matcha_pb');

class Feed extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	// readFeed = () => {
	// 	console.log(`called`);
	// 	const request = new empty();
	// 	const uid = this.props.cookies.get('uid');
	// 	const temp = this.props.cookies.get('session_id');
	// 	// request.setTagsList(['cat']);
	// 	// request.setMaxage(20);
	// 	const metaData = {
	// 		'user_id': uid,
	// 		'session_id': temp
	// 	}
	// 	const stream = window.Aclient.test2(request, metaData);
	// 	stream.on('data', function(response) {
	// 		console.log(response);
	// 	});
	// 	stream.on('error', function(err) {
	// 		console.log(`error: ${err}`);
	// 	});
	// }

	// readFeed = () => {
	// 	console.log(`called`);
	// 	const request = new browseRequest();
	// 	const uid = this.props.cookies.get('uid');
	// 	const temp = this.props.cookies.get('session_id');
	// 	// request.setTagsList(['cat']);
	// 	// request.setMaxage(20);
	// 	const metaData = {
	// 		'user_id': uid,
	// 		'session_id': temp
	// 	}
	// 	const stream = window.Aclient.feed(request, metaData);
	// 	stream.on('data', function(response) {
	// 		console.log(response);
	// 	});
	// 	stream.on('error', function(err) {
	// 		console.log(`error: ${err}`);
	// 	});


	// }

	render() {
		return (
			<div>
			</div>
		)
	}
}

export default withCookies(Feed);