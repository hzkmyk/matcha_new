import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import { Head } from '../Head';
import './index.css'
const { browseRequest } = require('../matcha_pb');

class Feed extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: [
				0,
				''
			],
			users: []
		}
	}
	
	componentDidMount() {
		this.readFeed()
	}

	componentDidUpdate() {
		// this.readFeed()
	}

	readFeed = () => {
		console.log(`called`);
		const request = new browseRequest();
		const uid = this.props.cookies.get('uid');
		const temp = this.props.cookies.get('session_id');
		// request.setTagsList(['cat']);
		// request.setMaxage(20);
		const metaData = {
			'user_id': uid,
			'session_id': temp
		}
		const stream = window.Aclient.feed(request, metaData);
		stream.on('data', (response) => {
			const user = [...this.state.user]
			user[0] = response.array[0];
			user[1] = response.array[1];
			this.setState([user])
			this.state.users.push(user)
			console.log('a: ',this.state.users)
			console.log('a: ',this.state.users[0])
			console.log('a: ',this.state.users[1])
			
		});
		stream.on('error', function(err) {
			console.log(`error: ${err}`);
		});
	}



	render() {
		// this.readFeed
		return (
			<div>
				<Head />
				<div className="feedmain">
					{ this.state.users.map((value, i) => {
						return <div key={i}>{value}</div>
					})}
					
				</div>
			</div>
		)
	}
}

export default withCookies(Feed);