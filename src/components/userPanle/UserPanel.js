import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import "./UserPanel.css"
import {connect} from "react-redux";
import Grid from "material-ui/Grid/Grid";
import Test from "./Test";
import Button from "material-ui/es/Button/Button";
import AddIcon from 'material-ui-icons/Add';
import {addTest} from "../../redux/actions/TestAction";

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

let TestList = (props) => {
    let listTest = props.tests;
    return listTest.map(test => (
        <Grid item>
            <Test title={test.title} description={test.description}/>
        </Grid>
    ));
};

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
                            <TestList tests={this.props.testReducer}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Button onClick={this.addTest} variant="fab" color='primary' style={{
                    top: "auto",
                    right: 20,
                    bottom: 20,
                    left: "auto",
                    position: "fixed",

                }}>
                    <AddIcon/>
                </Button>
            </div>
        );
    }

    addTest = () => {
        this.props.onAddTest()
    }
}

const mapStateToProps = (state) => {
    return {
        userAccount: state.userAccount,
        testReducer: state.testReducer,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddTest: () => {
            dispatch(addTest("Test", "Description"))
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(withStyles(styles)(UserPanel));