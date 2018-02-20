import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Typography from 'material-ui/Typography';
import Tooltip from "material-ui/es/Tooltip/Tooltip";
import Grid from "material-ui/es/Grid/Grid";

const styles = theme => ({
    card: {
        minWidth: 275,
        maxWidth: 345,
        maxHeight: 500,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});


class Test extends Component {
    render() {
        return (
            <Card className={this.props.classes.card}>
                <CardContent>
                    <Typography component="h2" className={this.props.classes.title}>{this.props.title}</Typography>

                    <Grid container wrap="nowrap">
                        <Grid item xs>
                            <Typography component="p">
                                {this.props.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Tooltip id="tooltip-fab" title="Удалить тест">
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip id="tooltip-fab" title="Редактировать тест">
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(Test);