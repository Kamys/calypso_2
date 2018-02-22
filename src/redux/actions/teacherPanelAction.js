import {TEACHER_PANEL} from "../EventName";

const openEditTestModal = (editTestId) => {
    return {type: TEACHER_PANEL.OPEN_EDIT_TEST_MODAL, payload: {editTestId}};
};

const closeEditTestModal = (payload) => {
    return {type: TEACHER_PANEL.CLOSE_EDIT_TEST_MODAL, payload};
};


export {openEditTestModal, closeEditTestModal};