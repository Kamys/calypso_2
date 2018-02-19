import React, {Component} from 'react'
import Redirect from "react-router-dom/es/Redirect";
import Route from "react-router-dom/es/Route";
import Api from '../api/Api'

const PrivateRoute = ({component: Component, ...rest}) => (
	<Route
		{...rest}
		render={props =>
			checkUserAuthorization() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: {from: props.location}
					}}
				/>
			)
		}
	/>
);

function checkUserAuthorization() {
	let authToken = Api.getAuthToken();
	return !!authToken;
}

export default PrivateRoute;
