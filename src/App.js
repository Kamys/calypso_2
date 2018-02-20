import React, {Component} from 'react';
import {Route} from 'react-router'
import RegistrationPage from "./components/CenterPaper";
import PrivateRoute from "./components/PrivateRoute";
import {BrowserRouter, Link} from 'react-router-dom'
import UserPanel from "./components/userPanle/UserPanel";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/registration">Registration</Link>
                        </li>
                        <li>
                            <Link to="/login">login</Link>
                        </li>
                        <li>
                            <Link to="/userPanel">userPanel</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/registration" component={RegistrationPage}/>
                    <PrivateRoute exact path="/userPanel" component={UserPanel}/>
                </div>
            </BrowserRouter>
        );
    }
}


class Login extends Component {
    render() {
        return [
            <h1>This is user login</h1>,
        ];
    }
}

class Home extends Component {
    render() {
        return (
            <h1>This is home</h1>
        );
    }
}


export default App;
