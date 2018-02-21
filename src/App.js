import React, {Component} from 'react';
import {Route} from 'react-router'
import RegistrationPage from "./components/CenterPaper";
import PrivateRoute from "./components/PrivateRoute";
import {BrowserRouter, Link} from 'react-router-dom'
import UserPanel from "./components/userPanle/TeacherPanel";
import Switch from "react-router-dom/es/Switch";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/registration" component={RegistrationPage}/>
                    <PrivateRoute path="/teacherPanel" component={UserPanel}/>
                </Switch>
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
            <div style={{paddingLeft: 30}}>
                <h1>This is home</h1>
                <Link to="/registration">Регистрация</Link>
            </div>
        );
    }
}


export default App;
