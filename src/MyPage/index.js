import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { withCookies } from 'react-cookie';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import './index.css'
import { Head } from '../Head';
import Test2 from '../Test2';
const { User } = require('../matcha_pb');
const { imageRequest } = require('../matcha_pb');

class MyPage extends Component {
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
			}]
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
		const images = this.state.data;
		let combined = [];
		for (let i = 1; i < images.length; i++) {
			let temp = {...this.state.images};
			temp.original = "data:image/jpeg;base64," + images[i];
			temp.thumbnail = "data:image/jpeg;base64," + images[i];
			combined.push(temp);
		}
		return (
			<div className="myprofilepage">
				<Head />
				<Test2 />
			</div>
		)
	}
}

export default withCookies(MyPage);