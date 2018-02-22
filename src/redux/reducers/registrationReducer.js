import {REGISTRATION} from "../EventName";

function initState() {
    return {
        messages: [],
        isSuccessful: false
    }
}

export default function registration(state = initState(), action) {
    switch (action.type) {
        case REGISTRATION.REGISTER_REQUEST:
            return {isSuccessful: false};
        case REGISTRATION.REGISTER_SUCCESS:
            return {messages: action.payload.data.messages, isSuccessful: true};
        case REGISTRATION.REGISTER_FAIL:
            return {messages: action.payload.data.messages, isSuccessful: false};
        default:
            return state
    }
}
