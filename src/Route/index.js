import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';
import Verify from '../Verify';
import PleaseVerify from '../PleaseVerify';
import InitialProfile from '../InitialProfile';
import InitialPhoto from '../InitialProfile/Photos';
import Test from '../Test';
import LostPasswod from '../LostPassword';
import ResetPasswod from '../ResetPassword';
import InvalidLink from '../Verify/InvalidVerificationLink';
import Success from '../Verify/Success';
import Feed from '../Feed';
import UserPage from '../UserPage';
import GeneralInfo from '../MyPage/generalInfo';
import UpdateEmail from '../UpdateEmail';
import VerifyNewEmail from '../VerifyNewEmail';
import Profile from '../MyPage/profile';
import Seen from '../MyPage/seen';
import Liked from '../MyPage/liked';

class MyRoute extends Component {
	render() {
		return(
			<Router history={createBrowserHistory()}>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/pleaseverify' component={PleaseVerify} />
				<Route exact path='/verify' component={Verify} />
				<Route exact path='/initial_profile' component={InitialProfile} />
				<Route exact path='/initial_profile/photos' component={InitialPhoto} />
				<Route exact path='/test' component={Test} />
				<Route exact path='/forgotpassword' component={LostPasswod} />
				<Route path='/reset' component={ResetPasswod} />
				<Route path='/invalid' component={InvalidLink} />
				<Route path='/success' component={Success} />
				<Route path='/feed' component={Feed} />
				<Route path='/user' component={UserPage} />
				<Route exact path='/mypage/general' component={GeneralInfo} />
				<Route exact path='/mypage/profile' component={Profile} />
				<Route exact path='/mypage/seen' component={Seen} />
				<Route exact path='/mypage/liked' component={Liked} />
				<Route path="/updateemailinfo" component={UpdateEmail} />
				<Route path='/updateEmail' component={VerifyNewEmail} />
			</Router>
		);
	}
}

export default MyRoute;