import React, { Component } from "react";
import { withCookies } from 'react-cookie';
import "./index.css"
const { likedStatus } = require('../../matcha_pb');
const request = new likedStatus();

class LikeCon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			likedyou: ["test", "test", "test"],
			iliked: ["test2", "test2", "test2"]
		}
	}

	metaData = {
		'user_id': this.props.cookies.get('uid'),
		'session_id': this.props.cookies.get('session_id')
	}

	componentDidMount() {
		this.getUserInfo();
	}

	getUserInfo = () => {
		const uid = this.props.cookies.get('uid');
		const session_id = this.props.cookies.get('session_id')
		const metaData = {
			'user_id': uid,
			'session_id': session_id
		}
		// request.setId(uid);
		window.Aclient.getUser(request, metaData, (err, reply) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
			} else {
				this.setState({
					iliked: reply.getIliked()
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
				<div>
					<div className="whohas">People Who Liked You</div>
					{this.state.likedyou.map((value, i) => {
						return <div className="seenpeople" key={i}>{value}</div>
					})}
				</div>
				<div>
					<div className="whohas">People You Have Liked</div>
					{this.state.iliked.map((value, i) => {
								return <div className="seenpeople" key={i}>{value}</div>
					})}
				</div>
			</div>
		)
	}
};

export default withCookies(LikeCon);
