import React, {Component} from 'react';
import {Route} from 'react-router'
import RegistrationPage from "./components/CenterPaper";
import PrivateRoute from "./components/PrivateRoute";
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/registration" component={RegistrationPage}/>
					<PrivateRoute path="/userPanel" component={UserPanel}/>
				</div>
			</BrowserRouter>
		);
	}
}


class Login extends Component {
	render() {
		return (
			<h1>This is user login</h1>
		);
	}
}

class Home extends Component {
	render() {
		return (
			<h1>This is home</h1>
		);
	}
}

class UserPanel extends Component {
	render() {
		return (
			<h1>This is user panel</h1>
		);
	}
}


export default App;
