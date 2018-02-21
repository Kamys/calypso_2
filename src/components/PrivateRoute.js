import React, {Component} from 'react'
import Redirect from "react-router-dom/es/Redirect";
import Route from "react-router-dom/es/Route";
import checkAutorisation from "../redux/actions/checkAutorisation";
import {connect} from "react-redux";

class PrivateRoute extends React.Component {

    componentWillMount(){
        this.props.onCheckAutorisation();
    }

    render() {
        const {component: Component, ...rest} = this.props;

        const dataLoading = this.props.loading.isDataLoading;
        if (dataLoading) {
            return(
                <h1>Loading....</h1>
            )
        }

        return (
            <Route {...rest} render={(props) => {
                return this.props.userAccount.isAutorisationSuccessful ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{
                        pathname: '/registration',
                        state: {from: this.props.location}
                    }}/>
                )
            }}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAccount: state.userAccount,
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCheckAutorisation: () => {
            dispatch(checkAutorisation())
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(PrivateRoute);
