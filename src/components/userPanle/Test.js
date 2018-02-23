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
import {editTest, deleteTest} from "../../redux/actions/testAction";
import {openEditTestModal} from "../../redux/actions/teacherPanelAction";


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
    }

    onClickDelete = () => {
        this.props.onDeleteTest(this.props.id);
    };

    onClickEdit = () => {
        this.props.onOpenEditTestModal(this.props.id);
    };

    render() {
        const {title, description} = this.props;
        return (
            <Card className={this.props.classes.card}>
                <CardContent>
                    <Typography component="h2" variant="title"
                                className={this.props.classes.typography}>
                        {title}
                    </Typography>
                    <Grid container wrap="nowrap">
                        <Grid item xs>
                            <Typography component="p">
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Tooltip id="tooltip-fab" title="Удалить тест">
                        <IconButton onClick={this.onClickDelete}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip id="tooltip-fab" title="Редактировать">
                        <IconButton onClick={this.onClickEdit}>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        teacherPanel: state.teacherPanel
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteTest: (id) => {
            dispatch(deleteTest(id))
        },
        onOpenEditTestModal: (id) => {
            dispatch(openEditTestModal(id))
        },
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(withStyles(styles)(Test));