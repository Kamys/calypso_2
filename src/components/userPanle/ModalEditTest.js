import React, {Component} from 'react';
import Modal from 'material-ui/Modal';
import Typography from "material-ui/es/Typography/Typography";
import {withStyles} from 'material-ui/styles';
import {addTest} from "../../redux/actions/testAction";
import {connect} from "react-redux";

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class ModalEditTest extends Component {

    handleClose = () => {
        this.setState({open: false});
    };


    render() {
        const {classes, teacherPanel} = this.props;

        console.log("Modal data = ", teacherPanel);
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={teacherPanel.isOpenEditTestModal}
                onClose={this.handleClose}>
                <div className={classes.paper}>
                    <Typography variant="title" id="modal-title">
                        Text in a modal
                    </Typography>
                    <Typography variant="subheading" id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </div>
            </Modal>
        );
    }
}

const ModalEditTestWrapped = withStyles(styles)(ModalEditTest);

const mapStateToProps = (state) => {
    return {
        teacherPanel: state.teacherPanel
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        /*onAddTest: () => {
            dispatch(addTest())
        }*/
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(ModalEditTestWrapped);