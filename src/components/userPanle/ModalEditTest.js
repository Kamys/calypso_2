import React, {Component} from 'react';
import Modal from 'material-ui/Modal';
import Typography from "material-ui/es/Typography/Typography";
import {withStyles} from 'material-ui/styles';
import {addTest} from "../../redux/actions/testAction";
import {closeEditTestModal} from "../../redux/actions/teacherPanelAction";
import {connect} from "react-redux";

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

        console.log("Modal data = ", teacherPanel);
        return (
            <Modal
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={teacherPanel.isOpenEditTestModal}
                onBackdropClick={this.handleClose}
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