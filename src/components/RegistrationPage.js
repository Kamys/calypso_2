import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';
import Paper from "material-ui/es/Paper/Paper";
import {withFormik} from 'formik';
import {setLocale} from 'yup/lib/customLocale'
import Yup from 'yup';
import RegistrationForm from "./RegistrationForm";
import EventName from "../redux/EventName";
import {connect} from "react-redux";


const RegistrationPageStyles = theme => ({
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

setLocale({
	string: {
		min: "Должен быть больше ${min}",
		email: "Неправильный email",
	},
	mixed: {
		required: "Обязательное поле",
	}
});

class RegistrationPage extends React.Component {
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
								<Formik/>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

const Formik = withFormik({
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
	handleSubmit: (values) => {
		this.props.registrationUser(values.fullName, values.login, values.password);
	},
	displayName: 'RegistrationFormik',
})(RegistrationForm);

export default connect(
	state => ({
		userAccount: state
	}),
	dispatch => ({
		registrationUser: (fullName, login, password) => {
			const payload = {
				fullName,
				login,
				password
			};
			dispatch({
				type: EventName.REGISTRATION_USER, payload
			})
		}
	})(withStyles(RegistrationPageStyles)(RegistrationPage))
);

