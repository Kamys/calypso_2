import React from 'react';
import Button from "material-ui/es/Button/Button";
import {Form} from 'formik';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid/Grid';

import {withStyles} from "material-ui/styles/index";

const RegistrationFormStyles = () => ({
    errorMessages: {
        color: "#E91E63",
    }
});

class RegistrationForm extends React.Component {
    render() {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
        } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            id="fullName"
                            label="ФИО"
                            margin="normal"
                            type="text"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.fullName && touched.fullName}
                            helperText={errors.fullName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="login"
                            label="login"
                            margin="normal"
                            type="mail"
                            value={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.login && touched.login}
                            helperText={errors.login}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            id="password"
                            label="Придумайте пароль"
                            margin="normal"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password && touched.password}
                            helperText={errors.password}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="rePassword"
                            label="Повторите пароль"
                            margin="normal"
                            type="password"
                            value={values.rePassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.rePassword && touched.rePassword}
                            helperText={errors.rePassword}
                        />
                    </Grid>
                </Grid>
                <Grid container
                      direction="column"
                      alignItems={"center"}
                      justify={"flex-end"}>
                    <Grid item>
                        <Button type="submit" disabled={isSubmitting} variant="raised"
                                color="primary">
                            Регистрация</Button>
                    </Grid>
                    <Grid className={this.props.classes.errorMessages} item>
                        {<div>{errors.server}</div>}
                    </Grid>

                </Grid>
            </Form>
        );
    }
}

export default withStyles(RegistrationFormStyles)(RegistrationForm);