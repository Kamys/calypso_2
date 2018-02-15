import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid/Grid';
import Paper from "material-ui/es/Paper/Paper";

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
                <Grid  xs={5} justify="center" alignItems="center" direction="row">
                    {[0, 1, 2].map(value => (
                        <Grid key={value} item>
                            <Paper
                                className={classes.paper}
                                style={{ paddingTop: (value + 1) * 10, paddingBottom: (value + 1) * 10 }}
                            >
                                {`Cell ${value + 1}`}
                            </Paper>
                        </Grid>
                        ))}
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
    },
    paper: {
        padding: theme.spacing.unit * 2,
        height: '100%',
    }
});

export default withStyles(styles)(TextFields);
