import React, { Component } from "react";
import { withCookies } from 'react-cookie';
const { User } = require('../../matcha_pb');
const { imageRequest } = require('../../matcha_pb');
const request = new User();

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'Username',
			firstName: 'First Name',
			lastName: 'Last Name',
			gender: 'Gender',
			email: 'Email Address',
			preference: 'Interested in',
			interests: [],
			bio: 'Bio',
			age: 20,
			pics: [],
			fameRating: 50,
			location: 'Location',
			seenHistory: [],
			data: [],
			images: [{
				original: '',
				thumbnail: ''
			}],
			// uid: this.props.cookies.get('uid'),
			// session_id: this.props.cookies.get('session_id')
		}
	}

	metaData = {
		'user_id': this.props.cookies.get('uid'),
		'session_id': this.props.cookies.get('session_id')
	}

	componentDidMount() {
		this.getUserInfo();
		this.allSet();
	}

	updateUserInfo = (updatedInfo) => {
		const uid = this.props.cookies.get('uid');
		const session_id = this.props.cookies.get('session_id')
		const metaData = {
			'user_id': uid,
			'session_id': session_id
		}
		switch (updatedInfo) {
			case 'username':
				request.setUsername(this.state.username);
				break;
			case 'firstName':
				request.setFirstname(this.state.firstName);
				break;
			case 'lastName':
				request.setLastname(this.state.lastName);
				break;
			case 'email':
				request.setEmail(this.state.email);
				break;
		}
		window.Aclient.updateUser(request, metaData, (err, reply) => {
			if (err) {
				console.log(err.code, err.message);
			} else {
				console.log(reply.getMessage());
				if (updatedInfo == 'email') {
					this.props.history.push('/verifynewemail');
				}
			}
		})
	}

	getUserInfo = () => {
		const uid = this.props.cookies.get('uid');
		const session_id = this.props.cookies.get('session_id')
		const metaData = {
			'user_id': uid,
			'session_id': session_id
		}
		request.setId(uid);
		window.Aclient.getUser(request, metaData, (err, reply) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
			} else {
				this.setState({
					username: reply.getUsername(),
					firstName: reply.getFirstname(),
					lastName: reply.getLastname(),
					email: reply.getEmail(),
					gender: reply.getGender(),
					preference: reply.getPreference(),
					age: reply.getAge(),
					fameRating: reply.getFamerating(),
					location: reply.getLocation(),
					interests: reply.getTagsList(),
					bio: reply.getBio(),
					seenHistory: reply.getSeenhistoryList()
				});
			}
		})
	}

	getImages = () => {
		return new Promise((resolve, reject) => {
			const request = new imageRequest();
			let arr = [];
			const uid = this.props.cookies.get('uid');
			const session_id = this.props.cookies.get('session_id');
			const metaData = {
				'user_id': uid,
				'session_id': session_id
			}
			request.setUserid(uid);
			request.setAll(true);
			const stream = window.Aclient.getImages(request, metaData);
			stream.on('data', function(response) {
				const d = response.getImage_asB64();
				arr.push(d);
			});
			stream.on('status', function(response) {
				console.log(response.code);
				console.log(response.detail);
			});
			stream.on('error', function(err) {
				console.log(`error: ${err.message} code is: ${err.code}`);
			});
			stream.on('end', function(){
				resolve(arr);
			})
		})
	}
	
	allSet = async () => {
		try {
			const data = await this.getImages();
			this.setState({data});
		} catch(error) {
			console.log(error.response);
		}
	}

	render() {
		const contentStyle = {
			paddingTop: 20,
			paddingRight: 20,
			paddingBottom: 80,
			paddingLeft: this.props.style.showSidebar? 200 : 10
		};
		const images = this.state.data;
		let combined = [];
		for (let i = 1; i < images.length; i++) {
			let temp = {...this.state.images};
			temp.original = "data:image/jpeg;base64," + images[i];
			temp.thumbnail = "data:image/jpeg;base64," + images[i];
			combined.push(temp);
		}
		return (
			<div className="myprofilepage" style={contentStyle}>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('firstName');
					}}
				>
					<span>First Name: </span>
					<input
						type="text"
						placeholder={this.state.firstName}

					/>
					<button type="submit">Update</button>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('lastName');
					}}
				>
					<span>Last Name: </span>
					<input
						type="text"
						placeholder={this.state.lastName}

					/>
					<button type="submit">Update</button>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('username');
					}}
				>
					<span>Username: </span>
					<input
						type="text"
						placeholder={this.state.username}
					/>
					<button type="submit">Update</button>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('email');
					}}
				>
					<span>Email Address: </span>
					<input
						type="text"
						placeholder={this.state.email}

					/>
					<button type="submit">Update</button>
				</form>

			</div>
		)
	}
};

export default withCookies(Content);
