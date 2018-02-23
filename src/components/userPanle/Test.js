import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Typography from 'material-ui/Typography';
import Tooltip from "material-ui/es/Tooltip/Tooltip";
import Grid from "material-ui/es/Grid/Grid";
import {connect} from "react-redux";
import * as testActionCreator from "../../redux/actions/testAction";
import {deleteTest} from "../../redux/actions/testAction";
import * as modalWindowActionCreator from "../../redux/actions/modalWindowAction";
import {openEditTestModal} from "../../redux/actions/modalWindowAction";
import bindActionCreators from "redux/src/bindActionCreators";


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
        this.props.actions.deleteTest(this.props.id);
    };

    onClickEdit = () => {
        this.props.actions.openEditTestModal(this.props.id);
    };

    render() {
        console.log("testActionCreator", testActionCreator);
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


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...testActionCreator,
        ...modalWindowActionCreator
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(withStyles(styles)(Test));