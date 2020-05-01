import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InvalidLink extends Component {
	render() {
		return (
			<div className="successpage">
				<header>
					<div>MATCHA</div>
				</header>
				<div className="successmain">
					<div>Something went wrong =(</div>
					<div><Link to="/signup">Please register again</Link></div>
				</div>
				<footer>
					<div>© 2020 MATCHA INC.</div>
				</footer>
			</div>
		)
	}
}

export default InvalidLink;