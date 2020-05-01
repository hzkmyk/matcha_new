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
			images: []
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
			joined = this.state.images.concat(arr[1]);
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

	render() {
		const maxSize = 5242880;
		const images = this.state.images;
		const Example = ({ data }) => <img src={`data:image/jpeg;base64, ${data}`} alt="" width="200" />
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
						<Dropzone
							onDrop={this.onDrop}
							accept="image/png, image/jpeg, image/jpg"
							minSize={0}
							maxSize={maxSize}
						>
							{({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
								const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
								return (
									<div {...getRootProps()}>
										<input {...getInputProps()} />
										{!isDragActive && 'Click here or drop a file to upload!'}
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
					</div>
					<div>
						{images.map((image, i) => {
							return <div key={i}><Example data={image} /></div>
						})}
					</div>
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