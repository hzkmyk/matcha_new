import React, { Component } from "react";
import { withCookies } from 'react-cookie';

class EmailSent extends Component {
	render() {
		return (
			<div>Email has been sent to your updated email adress. Please verify.</div>
		)
	}
};

export default withCookies(EmailSent);
