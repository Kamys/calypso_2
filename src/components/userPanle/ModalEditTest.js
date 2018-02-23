import React, {Component} from 'react';
import Modal from 'material-ui/Modal';
import {withStyles} from 'material-ui/styles';
import {closeEditTestModal} from "../../redux/actions/teacherPanelAction";
import {connect} from "react-redux";
import EditTestFormFormik from "./EditTestForm";

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0
    }
});

class ModalEditTest extends Component {

    handleClose = () => {
        this.props.onCloseEditTestModal();
    };


    render() {
        const {classes, teacherPanel} = this.props;

        return (
            <Modal
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={teacherPanel.isOpenEditTestModal}
                onBackdropClick={this.handleClose}
                onClose={this.handleClose}>

                <div className={classes.paper}>
                    <EditTestFormFormik/>
                </div>
            </Modal>
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
        onCloseEditTestModal: () => {
            dispatch(closeEditTestModal())
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(withStyles(styles)(ModalEditTest));