import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

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
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container align="center">
                    <Card className={classes.card}>
                        <CardContent>
                            <form className={classes.container} noValidate autoComplete="off">
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        label="Имя"
                                        className={classes.textField}
                                        value={this.state.name}
                                        onChange={this.handleChange('name')}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="mail"
                                        label="Mail"
                                        className={classes.textField}
                                        value={this.state.mail}
                                        onChange={this.handleChange('mail')}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Придумайте пароль"
                                        className={classes.textField}
                                        value={this.state.password}
                                        onChange={this.handleChange('password')}
                                        margin="normal"
                                    />
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
});

export default withStyles(styles)(TextFields);
