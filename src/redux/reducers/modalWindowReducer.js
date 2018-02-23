import {MODAL_WINDOW} from "../EventName";

function initState() {
    return {
        isOpenEditTestModal: false,
        editTestId: 0
    }
}

export default function modalWindowReducer(state = initState(), action) {
    switch (action.type) {
        case MODAL_WINDOW.OPEN_EDIT_TEST:
            let editTestId = action.payload.editTestId;
            return {
                isOpenEditTestModal: true,
                editTestId
            };
        case MODAL_WINDOW.CLOSE_EDIT_TEST:
            return {
                isOpenEditTestModal: false,
                editTestId: 0
            };
        default:
            return state
    }
}
