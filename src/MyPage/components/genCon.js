import React, { Component } from "react";
import { withCookies } from 'react-cookie';
import "./index.css"
const { User } = require('../../matcha_pb');
	const request = new User();

class GenCon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: 'First Name',
			lastName: 'Last Name',
			email: 'Email Address',
			style: "none"
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
				console.log("updating userinfo", this.state.username)
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
			default:
				break;
		}
		if (updatedInfo === 'email') {
			this.changeStyle();
		}
		window.Aclient.updateUser(request, metaData, (err, reply) => {
			if (err) {
				console.log(err.code, err.message);
			} else {
				console.log(reply.getMessage());
			}
		})
	}

	changeStyle = () => {
		if (this.state.style === "none" || this.state.style === "inline") {
			this.setState({ style: "block" })
		} 	else if (this.state.style === "block") {
			this.setState({ style: "none" })
		}
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
					firstName: reply.getFirstname(),
					lastName: reply.getLastname(),
					email: reply.getEmail(),
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
						this.updateUserInfo('firstName');
					}}
				>
					<div>First Name: </div>
					<div>
						<input
							type="text"
							value={this.state.firstName}
							onChange={e => this.setState({ firstName: e.target.value })}
						/>
					</div>
					<div>
						<button type="submit">Update</button>
					</div>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('lastName');
					}}
				>
					<div>Last Name: </div>
					<div>
					<input
						type="text"
						value={this.state.lastName}
						onChange={e => this.setState({ lastName: e.target.value })}
					/>
					</div>
					<div>
					<button type="submit">Update</button>
					</div>
				</form>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.updateUserInfo('email');
					}}
				>
					<div>Email Address: </div>
					<div><input
						type="text"
						value={this.state.email}
						contentEditable="true"
						onChange={e => this.setState({ email: e.target.value })}
					/></div>
					<div><button type="submit">Update</button></div>
					
				{/* <!-- The Modal --> */}
				<div id="myModal"
						 style={{display: this.state.style}}
						 className="modal"
				>
					{/* <!-- Modal content --> */}
					<div className="modal-content">
						<span className="close"
									style={{display: this.state.style}}
									onClick={this.changeStyle}
						>&times;</span>
						<p>Confirmation Email Sent to your New Email. Please Verify.</p>
					</div>
				</div>
				</form>
				</div>
			</div>
		)
	}
};

export default withCookies(GenCon);
