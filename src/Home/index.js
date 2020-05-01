import React, { Component } from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import BackgroundImage from '../Images/couple3.jpg';
import './index.css';

class Home extends Component {
	render() {
		return(
		<div className="main" style={{backgroundImage: `url(${BackgroundImage})`}}>
			<div className="header">
				<div id="title">MATCH<span className="red">A</span></div>
				<div className="header-login"><Link to="login">Login</Link></div>
			</div>
			<div className="slogan">
				<div>Find your date today.</div>
				<div>Love is just a click away.</div>
			</div>
			<div className="signuplink"><Link to="/signup">Sign Up</Link></div>
			<Footer />
		</div>
		)
	}
}

export default Home;