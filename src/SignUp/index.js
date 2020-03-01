import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../Images/matchaLogo/5.png';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			username: '',
			emailAdress: '',
			password: '',
			confirmPassword: ''
		};
	}

	render() {
		return (
			<div className="main">
				<div className="formpart">
					<div className="x"><Link to='/'>X</Link></div>
					<div id="signuplogo">MATCH<span class="red">A</span></div>
					<div id="getstarted">Get Started</div>
					<form>
						<input
							type="text"
							placeholder="First Name"
						/>
						<input
							type="text"
							placeholder="Last Name"
						/>
						<input
							type="text"
							placeholder="Username"
						/>
						<input
							type="text"
							placeholder="Email Adress"
						/>
						<input
							type="password"
							placeholder="Password"
						/>
						<input
							type="password"
							placeholder="Confirm Password"
						/>
						<button id="signupsubmit" type="submit">Sign Up</button>
					</form>
					<div className="existinguser">Already have an account? <Link to='/login'>Login</Link></div>
				</div>
			</div>
		);
	}
}

export default SignUp;