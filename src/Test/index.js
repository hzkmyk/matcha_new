import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
const { AccountClient } = require('../matcha_grpc_web_pb');
// const { imageData } = require('../matcha_pb');
const { imageRequest } = require('../matcha_pb');

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	
	getImages = () => {
		return new Promise((resolve, reject) => {
			const client = new AccountClient('http://192.168.43.23:8080');
			const request = new imageRequest();
			let arr = [];
			const uid = this.props.cookies.get('uid');
			const temp = this.props.cookies.get('session_id');
			const metaData = {
				'user_id': uid,
				'session_id': temp
			}
			request.setUserid(3);
			request.setCount(2);
			const stream = client.getImages(request, metaData);
			stream.on('data', function(response) {
				console.log(response.getImage_asB64());
				const d = response.getImage_asB64();
				arr.push(d);
			});
			stream.on('error', function(err) {
				console.log(`error: ${err}`);
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
			// console.log(`statedata is ${this.state.data}`);
		} catch(error) {
			console.log(error.response);
		}
	}

	componentDidMount() {
		this.allSet();
	}
	
	render() {
		const images = this.state.data;
		const Example =  ({ data }) => <img src={`data:image/jpeg;base64,${data}`} alt='' />
		return (
			<div>
				<div>
					{images.map((image, key) => <Example data={image} key={key}/>)}
				</div>
				<div>test page</div>
			</div>
		);
	}
}

export default withCookies(Test);