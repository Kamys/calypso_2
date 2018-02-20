import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import "./UserPanel.css"
import {connect} from "react-redux";
import Grid from "material-ui/Grid/Grid";
import Test from "./Test";

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
    container: {
        marginLeft: 5,
        marginTop: 5,
    }
};

function TestList() {
    let listTest = [];
    for(let i = 0; i < 20; i++){
        listTest.push(
            <Grid item>
                <Test/>
            </Grid>
        );
    }
    return listTest;


}

let NavAppBar = (props) =>(
    <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="title" color="inherit" className={props.classes.flex}>
                Панель пользователя
            </Typography>
            <Typography variant="title" color="primary">
                {props.userAccount.fullName}
            </Typography>
        </Toolbar>
    </AppBar>
);

class UserPanel extends Component {
    render() {
        return (
            <div>
                <NavAppBar {...this.props}/>
                <Grid container className={this.props.classes.root}>
                    <Grid item xs={12}>
                        <Grid
                            container
                            className={this.props.classes.container}
                            direction="row"
                            alignItems="flex-start"
                            justify="flex-start">
                            <TestList/>
                        </Grid>
                    </Grid>
                </Grid>
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