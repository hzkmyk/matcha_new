import React, { Component } from "react";
import { withCookies } from 'react-cookie';
import "./index.css"
const { User } = require('../../matcha_pb');
const request = new User();

class ProCon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gender: 'Gender',
			isGen: 'IsGen',
			oppGen: 'OppGen',
			preference: 'Interested in',
			pre1: 'pre1',
			pre2: 'pre2',
			pre3: 'pre3',
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
				this.setState({
					isGen: this.state.gender,
					oppGen: this.state.isGen = "female" ? "male": "female",
					pre1: this.state.preference,
				})
				if (this.state.pre1 === 'female') {
					this.setState({
						pre2: 'male',
						pre3: 'both'
					})
				} else if (this.state.pre1 === 'male') {
					this.setState({
						pre2: 'female',
						pre3: 'both'
					})
				} else if (this.state.pre1 === 'both') {
					this.setState({
						pre2: 'female',
						pre3: 'male'
					})
				}
				console.log(this.state.pre1, this.state.pre2, this.state.pre3)
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
					className="togglee"
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('gender');
					}}
				>
					<div>Gender: </div>
					<div className="selectionss">
						<input
							type="radio"
							name="gender"
							id={this.state.isGen}
							value={this.state.isGen}
							defaultChecked
							required
							onChange={e => this.setState({ gender: e.target.value })}
						/>
						<label htmlFor={this.state.isGen}>{this.state.isGen}</label>
						<input
							type="radio"
							name="gender"
							id={this.state.oppGen}
							value={this.state.oppGen}
							onChange={e => this.setState({ gender: e.target.value })}
						/>
						<label htmlFor={this.state.oppGen}>{this.state.oppGen}</label>
					</div>
					<div>
						<button type="submit">Update</button>
					</div>
				</form>
				<form
					className="togglee"
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('preference');
					}}
				>
					<div>Preference: </div>
						<div className="selectionss">
							<input
								type="radio"
								name="sexpref"
								id="pre1"
								value={this.state.pre1}
								defaultChecked
								required
								onChange={e => this.setState({ preference: e.target.value })}
							/>
							<label htmlFor="pre1">{this.state.pre1}</label>
							<input
								type="radio"
								name="sexpref"
								id="pre2"
								value={this.state.pre2}
								onChange={e => this.setState({ preference: e.target.value })}
							/>
							<label htmlFor="pre2">{this.state.pre2}</label>
							<input
								type="radio"
								name="sexpref"
								id="pre3"
								value={this.state.pre3}
								onChange={e => this.setState({ preference: e.target.value })}
							/>
							<label htmlFor="pre3">{this.state.pre3}</label>
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

export default withCookies(ProCon);