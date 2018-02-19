import React, {Component} from 'react';
import RegistrationPage from "./components/RegistrationPage";
import {Route, Redirect} from 'react-router'
import Api from './api/Api'

class App extends Component {
    render() {
        return (
            <Route exact path="/" render={() => (
                App.checkUserAuthorization() ? (
                    <Redirect to="/dashboard"/>
                ) : (
                    <RegistrationPage/>
                ))}
            />
        );
    }

    static checkUserAuthorization() {
        let authToken = Api.getAuthToken();
        return !!authToken;
    }
}

export default App;
