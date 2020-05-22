import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import Dropzone from 'react-dropzone';
import './index.css';
const { imageData } = require('../../matcha_pb');

class InitialPhoto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: [],
			images: [],
			index: 0
		}
	}

	onDrop = async (acceptedFile) => {
		const file = acceptedFile.find(f => f)
		if (file) {
			let joined = this.state.names.concat(file.name);
			this.setState({ names: joined });
			let promise = new Promise((resolve, reject) => {
				let reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = () => {
					resolve(reader.result);
				}
			})
			const result = await promise;
			const arr = result.split(",");
			// if (this.state.images[this.state.index]) {
				joined = this.state.images.concat(arr[1]);
			// } else {
			// 	let temp1	 = this.state.images.slice(0, this.state.index)
			// 	let temp2 = this.state.images.slice(this.state.index, this.state.index + this.state.images.length)
			// 	joined = temp1.push(arr[1]).concat(temp2)
			// }
			this.setState({ images: joined });
		}
	}

	uploadPhotos = () => {
		const request = new imageData();
		const uid = this.props.cookies.get('uid');
		const temp = this.props.cookies.get('session_id');
		const metadata = {
			'user_id': uid,
			'session_id': temp
		}
		let length = this.state.images.length;
		length = length < 5 ? length: 5;
		for (let i = 0; i < length; i++) {
			request.setImage(this.state.images[i]);
			request.setIndex(i + 1);
			window.Aclient.updateImage(request, metadata, (err, reply) => {
				if (err) {
					console.log(err.code);
					console.log(err.message);
				} else {
					console.log(reply.getMessage());
				}
			})
		}
		this.props.history.push('../feed');
	}


	Drop = (num) => {
		return (
		<Dropzone
			onDrop={this.onDrop}
			accept="image/png, image/jpeg, image/jpg"
			minSize={0}
			maxSize={5242800}
		>
			{({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
				const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > 5242800;
				return (
					<div {...getRootProps()}>
						<input {...getInputProps()} />
						{!isDragActive && 'upload'}
						{isDragActive && !isDragReject && "Drop it like it's hot!"}
						{isDragReject && "File type not accepted, sorry!"}
						{isFileTooLarge && (
							<div className="text-danger mt-2">
								File is too large.
							</div>
						)}
					</div>
				)}
			}
		</Dropzone>
		)
	}

	render() {
		const images = this.state.images;
		const Photos = ({ data }) => <img src={`data:image/jpeg;base64, ${data}`} alt="" width="200" />
		
		return (
			<div className="initialphotopage">
				<header>
					<div>MATCHA</div>
				</header>
				<div className="initialphotomain">
					<div className="photosofyourself">
						Photos of Yourself
					</div>
					<div className="initdrop">
						<div className="photo"><Photos data={images[0]} /></div>
						<div className="dropzone">{this.Drop(0)}</div>
						<div className="photo"><Photos data={images[1]} /></div>
						<div className="dropzone">{this.Drop(1)}</div>
						<div className="photo"><Photos data={images[2]} /></div>
						<div className="dropzone">{this.Drop(2)}</div>
						<div className="photo"><Photos data={images[3]} /></div>
						<div className="dropzone">{this.Drop(3)}</div>
						<div className="photo"><Photos data={images[4]} /></div>
						<div className="dropzone">{this.Drop(4)}</div>
					</div>
					{/* <div>
						{images.map((image, i) => {
							return <div key={i}><Photos data={image} /></div>
						})}
					</div> */}
				</div>
				<button
					type="submit"
					onClick={this.uploadPhotos}
				>
					Start Exploring
				</button>
				<footer>
					<div>© 2020 MATCHA INC.</div>
				</footer>
			</div>
		);
	}
}

export default withCookies(InitialPhoto);