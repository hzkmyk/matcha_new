import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class PleaseVerify extends Component {
	render() {
		return (
			<div className="verify">
				<header>
					<div>MATCHA</div>
				</header>
				<div className="vmessage">
					<div className="vmessagetitle">Verify Your Email</div>
					<div>A message has been sent to your email. Please verify and start enjoying Matcha =)</div>
					<div className="alldone">All done? <Link to="login">Log in</Link></div>
				</div>
				<footer>
					<div>© 2020 MATCHA INC.</div>
				</footer>
			</div>
		)
	}
}

export default PleaseVerify;