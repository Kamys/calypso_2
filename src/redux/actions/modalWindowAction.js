import {MODAL_WINDOW} from "../EventName";

const openEditTestModal = (editTestId) => {
    return {type: MODAL_WINDOW.OPEN_EDIT_TEST, payload: {editTestId}};
};

const closeEditTestModal = (payload) => {
    return {type: MODAL_WINDOW.CLOSE_EDIT_TEST, payload};
};


export {openEditTestModal, closeEditTestModal};