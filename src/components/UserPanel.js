import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import "./UserPanel.css"
import checkAutorisation from "../redux/actions/checkAutorisation";
import {connect} from "react-redux";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class UserPanel extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={this.props.classes.flex}>
                            Панель пользователя
                        </Typography>
                        <Typography variant="title" color="primary">
                            {this.props.userAccount.fullName}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userAccount: state.userAccount,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        /*onCheckAutorisation: () => {
            dispatch(checkAutorisation())
        }*/
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(withStyles(styles)(UserPanel));