import React, {Component} from 'react'
import Redirect from "react-router-dom/es/Redirect";
import Route from "react-router-dom/es/Route";
import Api from '../api/Api'

class PrivateRoute extends Component {
    render() {
        const {
            rest
        } = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                    PrivateRoute.checkUserAuthorization() ? (
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
    }

    static checkUserAuthorization() {
        let authToken = Api.getAuthToken();
        return !!authToken;
    }
}

export default PrivateRoute;
