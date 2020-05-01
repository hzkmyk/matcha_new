import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import './index.css';
const { loginRequest } = require('../matcha_pb');

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}
	
	letLoginUser = () => {
		const request = new loginRequest();
		request.setUsername(this.state.username);
		request.setPassword(this.state.password);
		window.Aclient.loginUser(request, {}, (err, reply) => {
			if (err) {
				console.log(err.code);
				console.log(err.message);
			} else {
				const { cookies } = this.props;
				const uid = reply.getUserid();
				const sessionID = reply.getSessionid();
				console.log(`replay: ${reply}`)
				console.log(`uid: ${uid}`);
				console.log(`session: ${sessionID}`);
				cookies.set('uid', uid, { path: '/' });	
				cookies.set('session_id', sessionID, { path: '/' });	
				if (this.props.cookies.get('missing_profile')){
					this.props.history.push('/initial_profile');
				} else {
					// this.props.history.push('/mypage');
				}
			}
		})
	}

	render() {
		return (
			<div className="loginpage">
				<header>
					<div>MATCHA</div>
				</header>
				<div className="loginmain">
					<div className="title"><Link to="/">MATCH<span className="red">A</span></Link></div>
					<div className="loginall">
						<div className="login">
							<form
								onSubmit={e => {
									e.preventDefault()
									this.letLoginUser()
								}
							}>
								<input
									type="text"
									placeholder="Username"
									onChange={e => this.setState({ username: e.target.value })}
									/>
								<input
									type="password"
									placeholder="Password"
									onChange={e => this.setState({ password: e.target.value })}
								/>
								<button
									type="submit"
									id="loginbutton"
								>
									Log In to Matcha
								</button>
							</form>
							<div className="forgotpass"><Link to="/forgotpassword">Forgot Password?</Link></div>
						</div>
						<div className="notyet">Not a member yet? <Link to="/signup">Sign Up</Link></div>
					</div>
				</div>
				<footer>
					<div>© 2020 MATCHA INC.</div>
				</footer>
			</div>
		);
	}
}

export default withCookies(Login);