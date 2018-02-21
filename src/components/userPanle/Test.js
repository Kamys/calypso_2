import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Typography from 'material-ui/Typography';
import Tooltip from "material-ui/es/Tooltip/Tooltip";
import Grid from "material-ui/es/Grid/Grid";
import TypographyEdit from "../TypographyEdit";
import {connect} from "react-redux";
import {editTest} from "../../redux/actions/testAction";


const styles = theme => ({
    card: {
        minWidth: 275,
        maxWidth: 345,
        maxHeight: 500,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        marginBottom: 16,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});


class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    onChangeTitle = (newTitle) => {
        const {id, description} = this.props;
        this.props.onChangeTest({id, title: newTitle, description});
    };

    onChangeDescription = (newDescription) => {
        const {id, title} = this.props;
        this.props.onChangeTest({id, title, description: newDescription});
    };


    render() {
        const {title, description} = this.props;
        return (
            <Card className={this.props.classes.card}>
                <CardContent>
                    <TypographyEdit onChangeComplete={this.onChangeTitle}>
                        <Typography component="h2" variant="title"
                                    className={this.props.classes.typography}>
                            {title}
                        </Typography>
                    </TypographyEdit>
                    <Grid container wrap="nowrap">
                        <Grid item xs>
                            <TypographyEdit onChangeComplete={this.onChangeDescription}>
                                <Typography component="p">
                                    {description}
                                </Typography>
                            </TypographyEdit>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Tooltip id="tooltip-fab" title="Удалить тест">
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        testReducer: state.testReducer
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeTest: (test) => {
            dispatch(editTest(test))
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(withStyles(styles)(Test));