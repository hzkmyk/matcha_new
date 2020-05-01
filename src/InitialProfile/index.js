import React, { Component } from 'react';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import './index.css';
const { User } = require('../matcha_pb');

class InitialProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: '',
			sexPreference: '',
			biography: '',
			value: '',
			interests: [],
			uid: 0,
			session_id: '',
			location: '',
			age: 0,
			interestAdded: false,
		}
	}

	getPermission = () => {
		return new Promise((resolve, reject) => {
			const { cookies } = this.props;
			const uid = cookies.get('uid');
			const session_id = cookies.get('session_id');
			this.setState({ uid, session_id });
			let gps = false;
			if (window.confirm(`Allow 'Matcha' to use your location?`)) {
				gps = true;
			}
			cookies.set('location', gps, { path: '/' });
			this.setState({ gps });
			resolve(gps);
		})
	}
	
	position = async () => {
		await this.getPermission();
		navigator.geolocation.getCurrentPosition(
			async position => {
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				})
				const config = {
					api_key: 'cbfa0f92c976b65f70bc676e05ee629a6b2a5ac'
				};
				if (this.state.gps) {
					const location = this.state.result = await axios.get(`https://api.geocod.io/v1.4/reverse?q=${position.coords.latitude},${position.coords.longitude}&api_key=${config.api_key}`);
					this.setState({ location: location.data.results[0].address_components.city });
				} else {
					const ipAdd = await axios.get(`https://api.ipify.org/`);
					let location = await axios.get(`https://json.geoiplookup.io/${ipAdd.data}`);
					const arr = location.data.city.split(" ");
					location = arr[0];
					this.setState({ location });
				}
			},
				err => console.log(err)
		);
	}

	componentDidMount() {
		this.position();
	}

	addProfileInfo = () => {
		const request = new User();
		const metaData = {
			'user_id': this.state.uid,
			'session_id': this.state.session_id
		}
		this.props.cookies.remove('missing_profile');
		request.setAge(this.state.age);
		request.setGender(this.state.gender);
		request.setPreference(this.state.sexPreference);
		request.setBio(this.state.biography);
		request.setId(this.state.uid);
		request.setLocation(this.state.location);
		for (const interest in this.state.interests) {
			request.addTags(this.state.interests[interest]);
		}
		window.Aclient.updateUser(request, metaData, (err, reply) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
			} else {
				console.log(reply.getMessage());
				this.props.history.push('/initial_profile/photos');
			}
		})
	}

	addInterests = () => {
		this.setState(state => {
			const interests = state.interests.concat(state.value);
			return {
				interests,
				value: '',
			};
		});
		this.setState({ interestAdded: true });
	};

	render() {
		return (
			<div className="initialprofilepage">
				<header>MATCHA</header>
				<div className="initialprofilemain">
						<form
							className="toggle"
							onSubmit={e => {
								e.preventDefault();
								if (this.state.interestAdded) {
									this.addProfileInfo();
								} else {
									alert("Please put at least one interest");
								}
							}}
						>
							<div className="tellusmore mergetwo">Tell Us More about Yourself</div>
							<div>Age</div>
							<div>
							<input
								type="number"
								value={this.state.age}
								name="age"
								required
								onChange={e => this.setState({ age: e.target.value })}
							/>
							</div>
							<div>Gender</div>
							<div className="selections">
								<input
									type="radio"
									value="female"
									id="female"
									name="gender"
									required
									onChange={e => this.setState({ gender: e.target.value })}
								/>
								<label htmlFor="female">Female</label>
								<input
									type="radio"
									value="male"
									id="male"
									onChange={e => this.setState({ gender: e.target.value })}
									name="gender"
								/>
								<label htmlFor="male">Male</label>
							</div>
							<div>Interested in</div>
							<div className="selections">
								<input
									type="radio"
									value="female"
									id="prefFemale"
									name="sexpref"
									required
									onChange={e => this.setState({ sexPreference: e.target.value })}
								/>
								<label htmlFor="prefFemale">Female</label>
								<input
									type="radio"
									value="male"
									id="prefMale"
									onChange={e => this.setState({ sexPreference: e.target.value })}
									name="sexpref"
									/>
								<label htmlFor="prefMale">Male</label>
								<input
									type="radio"
									value="both"
									id="prefBoth"
									onChange={e => this.setState({ sexPreference: e.target.value })}
									name="sexpref"
									/>
								<label htmlFor="prefBoth">Both</label>
							</div>
							<div>Interests</div>
							<div>
								<input
									type="text"
									value={this.state.value}
									onChange={e => this.setState({ value: e.target.value })}
								/>
								<button
									type="button"
									onClick={this.addInterests}
									disabled={!this.state.value}
								>
									Add
								</button>
								<div className="addedinterests">
									{this.state.interests.map((value, i) => {
									return <div key={i}>{value}</div>
								})}
								</div>
							</div>
							<div>Bio</div>
							<textarea
									required
									onChange={e => this.setState({ biography: e.target.value })}
								></textarea>
							<div className="mergetwo saveupdate">
								<button type="submit">Next</button>
							</div>
						</form>
					</div>
				<footer>
					<div>© 2020 MATCHA INC.</div>
				</footer>
			</div>
		)
	}
}

export default withCookies(InitialProfile);