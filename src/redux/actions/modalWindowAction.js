import {MODAL_WINDOW} from "../EventName";

export const openEditTestModal = (editTestId) => {
    return {type: MODAL_WINDOW.OPEN_EDIT_TEST, payload: {editTestId}};
};

export const closeEditTestModal = (payload) => {
    return {type: MODAL_WINDOW.CLOSE_EDIT_TEST, payload};
};