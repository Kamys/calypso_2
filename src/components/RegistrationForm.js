import React from "react";
import Button from "material-ui/es/Button/Button";
import {Form} from "formik";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid/Grid";
import {withFormik} from "formik";
import {setLocale} from "yup/lib/customLocale"
import {withStyles} from "material-ui/styles/index";
import Yup from "yup";
import {connect} from "react-redux";
import registrationRequest from "../actions/registrationRequest"

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
						{<div>{this.props.registration.errors}</div>}
					</Grid>

				</Grid>
			</Form>
		);
	}
}

setLocale({
	string: {
		min: "Должен быть больше ${min}",
		email: "Неправильный email",
	},
	mixed: {
		required: "Обязательное поле",
	}
});

const RegistrationFormik = withFormik({
	mapPropsToValues: (props) => ({
		login: props.login || "TestUser1",
		fullName: props.username || "Вася И.",
		password: props.password || "12345ef4r4Dr4",
		rePassword: props.password || "12345ef4r4Dr4",
	}),
	validationSchema: Yup.object().shape({
		login: Yup.string()
			.min(6)
			.required(),
		fullName: Yup.string()
			.min(6)
			.required(),
		password: Yup.string()
		//TODO: Add other matches
			.matches(/(\d)/, {excludeEmptyString: true, message: "Пароль должен содержать цифру"})
			.min(6)
			.required(),
		rePassword: Yup.string()
			.test("match", "Пароли не равны", function (rePassword) {
				return rePassword === this.parent.password
			})
			.required(),
	}),
	handleSubmit: (values, FormikBag) => {
		FormikBag.props.onRegistrationRequest(values.fullName, values.login, values.password);
	},
	displayName: 'RegistrationFormik',
})(withStyles(RegistrationFormStyles)(RegistrationForm));

const mapStateToProps = (state) => {
	return {
		registration: state.registration
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onRegistrationRequest: () =>{
			dispatch(registrationRequest())
		}
	}
};


export default connect(
	mapStateToProps,
	mapDispatchToProps)
(RegistrationFormik);
