import React, {Component} from 'react'
import Redirect from "react-router-dom/es/Redirect";
import Route from "react-router-dom/es/Route";
import {autorisationRequest} from "../redux/actions/autorisationAction";
import {connect} from "react-redux";
import autorisation from "../redux/reducers/autorisationReducer";

class PrivateRoute extends React.Component {

    componentWillMount(){
        this.props.onCheckAutorisation();
    }

    render() {
        const {component: Component, autorisation, ...rest} = this.props;

        const dataLoading = autorisation.isLoading;
        if (dataLoading) {
            return(
                <h1>Loading....</h1>
            )
        }

        return (
            <Route exact {...rest} render={(props) => {
                return autorisation.isAutorisationSuccessful ? (
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
        autorisation: state.autorisation,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCheckAutorisation: () => {
            dispatch(autorisationRequest())
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(PrivateRoute);
