import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid/Grid';
import Paper from "material-ui/es/Paper/Paper";
import Button from "material-ui/es/Button/Button";
import {Formik, Field, Form} from 'formik';
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
            fullName: "Вася",
            email: "Вася@mail.com",
            password: "12345",
            rePassword: "123345",
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
                                <Formik initialValues={{fullName: 'jared'}}
                                        onSubmit={(values, actions) => {
                                            Api.registration(this.state.fullName, this.state.email, this.state.password).then(
                                                successfully => {
                                                    console.log("Successfully! " + successfully);
                                                    /*actions.setSubmitting(false);
                                                    updateUser(updatedUser);
                                                    onClose();*/
                                                },
                                                error => {
                                                    console.log("error! " + error);
                                                    /*actions.setSubmitting(false);
                                                    actions.setErrors(transformMyAPIErrorToAnObject(error));*/
                                                }
                                            );
                                        }}
                                        render={({errors, touched, isSubmitting}) => (
                                            <Form>
                                                <Grid container>
                                                    <Grid item xs={6}>
                                                        <TextField
                                                            id="name"
                                                            label="Имя"
                                                            value={this.state.fullName}
                                                            onChange={this.handleChange('name')}
                                                            margin="normal"
                                                        />
                                                        {errors.fullName && touched.fullName &&
                                                        <div>{errors.fullName}</div>}
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField
                                                            id="email"
                                                            label="Mail"
                                                            value={this.state.email}
                                                            onChange={this.state.handleChange}
                                                            margin="normal"
                                                        />
                                                        {errors.email && touched.email && <div>{errors.email}</div>}
                                                    </Grid>
                                                </Grid>
                                                <Grid container>
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
                                                            id="re-password"
                                                            label="Повторите пароль"
                                                            value={this.state.rePassword}
                                                            onChange={this.handleChange('rePassword')}
                                                            margin="normal"
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid container
                                                      alignItems={"center"}
                                                      justify={"flex-end"}>
                                                    <Grid item>
                                                        <Button type="submit" disabled={isSubmitting} variant="raised"
                                                                color="primary"
                                                                className={this.props.classes.button}>
                                                            Регистрация</Button>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                />
                                <form noValidate autoComplete="off">

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
