import React, {Component} from 'react';
import PrivateRoute from "./components/PrivateRoute";
import Route from "react-router-dom/es/Route";


class App extends Component {
    render() {
        return (
            <div>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/userPanel" component={<h1>This is user panel</h1>}/>
            </div>
        );
    }
}

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default App;
