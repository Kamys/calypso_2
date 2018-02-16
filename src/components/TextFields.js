import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid/Grid';
import Paper from "material-ui/es/Paper/Paper";
import Button from "material-ui/es/Button/Button";
import {Formik} from "formik";
import Api from "../api/Api";

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: "500px",
    },
    paper: {
        padding: theme.spacing.unit * 2,
        height: '100%'
    },
    container: {
        height: '500px'
    }
});

class TextFields extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mail: "",
            showPassword: false,
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <Grid container className={this.props.classes.root}>
                <Grid item xs={12}>
                    <Grid
                        container
                        className={this.props.classes.container}
                        direction="row"
                        alignItems="center"
                        justify="center">
                        <Grid item>
                            <Paper className={this.props.classes.paper}>
                                <Formik initialValues={{name: 'jared'}}
                                        onSubmit={(values, actions) => {
                                            Api.registration(user.id, values).then(
                                                updatedUser => {
                                                    actions.setSubmitting(false);
                                                    updateUser(updatedUser);
                                                    onClose();
                                                },
                                                error => {
                                                    actions.setSubmitting(false);
                                                    actions.setErrors(transformMyAPIErrorToAnObject(error));
                                                }
                                            );
                                        }}/>
                                <form noValidate autoComplete="off">
                                    <Grid container xs={12}>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="name"
                                                label="Имя"
                                                value={this.state.name}
                                                onChange={this.handleChange('name')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="mail"
                                                label="Mail"
                                                value={this.state.mail}
                                                onChange={this.handleChange('mail')}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container xs={12}>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="password"
                                                label="Придумайте пароль"
                                                value={this.state.password}
                                                onChange={this.handleChange('password')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="password"
                                                label="Повторите пароль"
                                                value={this.state.password}
                                                onChange={this.handleChange('password')}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container
                                          alignItems={"center"}
                                          justify={"flex-end"} xs={12}>
                                        <Grid item>
                                            <Button variant="raised" color="primary"
                                                    className={this.props.classes.button}>
                                                Регистрация</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TextFields);
