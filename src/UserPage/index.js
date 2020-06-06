import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { withCookies } from 'react-cookie';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import './index.css'
const { User } = require('../matcha_pb');
const { imageRequest } = require('../matcha_pb');
const { userID } = require('../matcha_pb')

class UserPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'username',
			firstName: 'First Name',
			lastName: 'Last Name',
			gender: 'Gender',
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
			like: '🤍'
		}
	}

	componentDidMount() {
		this.getUserInfo();
		this.allSet();
	}

	getUserInfo = () => {
		const uid = this.props.cookies.get('uid');
		const temp = this.props.cookies.get('session_id');
		const request = new User();
		request.setId(uid);
		let metadata = {
			'user_id': uid,
			'session_id': temp
		}
		window.Aclient.getUser(request, metadata, (err, reply) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
			} else {
				this.setState({
					username: reply.getUsername(),
					firstName: reply.getFirstname(),
					lastName: reply.getLastname(),
					gender: reply.getGender(),
					preference: reply.getPreference(),
					age: reply.getAge(),
					fameRating: reply.getFamerating(),
					location: reply.getLocation(),
					interests: reply.getTagsList(),
					bio: reply.getBio(),
					seenHistory: reply.getSeenhistoryList()
				});
				switch(this.state.gender) {
					case 'female':
						this.setState({ gender: '🚺' })
						break;
					case 'male':
						this.setState({ gender: '🚹'})
						break;
					default:
						break;
				}
				switch(this.state.preference) {
					case 'female':
						this.setState({ preference: '🚺' })
						break;
					case 'male':
						this.setState({ preference: '🚹' })
						break;
					case 'both':
						this.setState({ preference: '🚻' })
						break;
					default:
						break;
				}
			}
			console.log(this.state.interests)
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

	setLike = () => {
		if (this.state.like === '🤍') {
			this.setState({ like: '❤️'})
		}
		const uid = this.props.cookies.get('uid');
		const temp = this.props.cookies.get('session_id');
		const request = new userID();
		request.setUserid(2)
		let metadata = {
			'user_id': uid,
			'session_id': temp
		}
		window.Aclient.likeUser(request, metadata, (err, reply) => {
		})
	}
					
	allSet = async () => {
		try {
			const data = await this.getImages();
			this.setState({data});
			console.log(data)
		} catch(error) {
			console.log(error.response);
		}
	}

	render() {
		const images = this.state.data;
		let combined = [];
		for (let i = 1; i < images.length; i++) {
			let temp = {...this.state.images};
			temp.original = "data:image/jpeg;base64," + images[i];
			temp.thumbnail = "data:image/jpeg;base64," + images[i];
			combined.push(temp);
		}
		return (
			<div className="userprofilepage">
				<header>
					MATCHA
				</header>
				<div className="imagegallery">
					<ImageGallery items={combined} />
				</div>
				<div className="prof">
					<div className="profTop">
						<span className="profName">{this.state.firstName} {this.state.lastName}</span>,{this.state.age}({this.state.username})<span className="like" onClick={this.setLike}> {this.state.like}</span>
					</div>
					<div><span>📍 {this.state.location}, </span><span>FR: {this.state.fameRating}%, </span><span>{this.state.gender} ❤️ {this.state.preference}</span></div>
					<div className="interesttags">{this.state.interests.map((value, i) => {
						return <span className="interesttag" key={i}>{value}</span>
					})}</div>
					<div className="profBio">"{this.state.bio}"</div>
				</div>
			</div>
		)
	}
}

export default withCookies(UserPage);