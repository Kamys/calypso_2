import {TEACHER_PANEL} from "../EventName";

function initState() {
    return {
        isOpenEditTestModal: false,
        editTestId: 0
    }
}

export default function registration(state = initState(), action) {
    switch (action.type) {
        case TEACHER_PANEL.OPEN_EDIT_TEST_MODAL:
            let editTestId = action.payload.editTestId;
            return {
                isOpenEditTestModal: true,
                editTestId
            };
        case TEACHER_PANEL.CLOSE_EDIT_TEST_MODAL:
            return {
                isOpenEditTestModal: false,
                editTestId: 0
            };
        default:
            return state
    }
}
