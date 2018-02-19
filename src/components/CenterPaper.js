import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';
import Paper from "material-ui/es/Paper/Paper";
import RegistrationForm from "./RegistrationForm";


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
								<RegistrationForm/>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(RegistrationPageStyles)(RegistrationPage);


