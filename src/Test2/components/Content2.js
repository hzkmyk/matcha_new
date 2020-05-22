import React, { Component } from "react";
import { withCookies } from 'react-cookie';
import "../../MyPage/index.css"
import "./index.css"
const { User } = require('../../matcha_pb');
const request = new User();

class Whyy extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gender: 'Gender',
			preference: 'Interested in',
			interests: [],
			bio: 'Bio',
			age: 20,
			location: 'Location',
			style: "none"
		}
	}

	metaData = {
		'user_id': this.props.cookies.get('uid'),
		'session_id': this.props.cookies.get('session_id')
	}

	componentDidMount() {
		this.getUserInfo();
	}

	updateUserInfo = (updatedInfo) => {
		const uid = this.props.cookies.get('uid');
		const session_id = this.props.cookies.get('session_id')
		const metaData = {
			'user_id': uid,
			'session_id': session_id
		}
		switch (updatedInfo) {
			case 'gender':
				request.setGender(this.state.gender);
				break;
			case 'preference':
				request.setPreference(this.state.preference);
				break;
			case 'age':
				request.setAge(this.state.age);
				break;
				case 'location':
					request.setLoaction(this.state.location);
					break;
				case 'interests':
					request.addTags(this.state.interests);
					break;
				case 'bio':
					request.setBio(this.state.bio);
					break;
				default:
				break;
		}
		window.Aclient.updateUser(request, metaData, (err, reply) => {
			if (err) {
				console.log(err.code, err.message);
			} else {
				console.log(reply.getMessage());
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
					gender: reply.getGender(),
					preference: reply.getPreference(),
					age: reply.getAge(),
					location: reply.getLocation(),
					interests: reply.getTagsList(),
					bio: reply.getBio(),
				});
			}
		})
	}

	render() {
		const contentStyle = {
			paddingTop: 20,
			paddingRight: 20,
			paddingBottom: 80,
			paddingLeft: this.props.style.showSidebar? 200 : 10
		};

		return (
			<div className="myprofilepage" style={contentStyle}>
				<div className="myprofilepagecon">
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('gender');
					}}
				>
					<div>Gender: </div>
					<div>
						<input
							type="text"
							value={this.state.gender}
							onChange={e => this.setState({ gender: e.target.value })}
						/>
					</div>
					<div>
						<button type="submit">Update</button>
					</div>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('preference');
					}}
				>
					<div>Preference: </div>
					<div>
						<input
							type="text"
							value={this.state.preference}
							onChange={e => this.setState({ preference: e.target.value })}
						/>
					</div>
					<div>
						<button type="submit">Update</button>
					</div>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('age');
					}}
				>
					<div>Age: </div>
					<div>
						<input
							type="text"
							value={this.state.age}
							onChange={e => this.setState({ age: e.target.value })}
						/>
					</div>
					<div>
						<button type="submit">Update</button>
					</div>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('location');
					}}
				>
					<div>Location: </div>
					<div>
						<input
							type="text"
							value={this.state.location}
							onChange={e => this.setState({ location: e.target.value })}
						/>
					</div>
					<div>
						<button type="submit">Update</button>
					</div>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('interests');
					}}
				>
					<div>Interests: </div>
					<div>
					<input
						type="text"
						value={this.state.interests}
						onChange={e => this.setState({ interests: e.target.value })}
					/>
					</div>
					<div>
					<button type="submit">Update</button>
					</div>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('bio');
					}}
				>
					<div>Bio: </div>
					<div><input
						type="text"
						value={this.state.bio}
						contentEditable="true"
						onChange={e => this.setState({ bio: e.target.value })}
					/></div>
					<div><button type="submit">Update</button></div>
				</form>
				</div>
			</div>
		)
	}
};

export default withCookies(Whyy);
