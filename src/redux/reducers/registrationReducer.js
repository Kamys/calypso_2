import EventName from "../EventName";

function initState() {
    return {
        messages: [],
        isSuccessful: false
    }
}

export default function registration(state = initState(), action) {
    switch (action.type) {
        case EventName.REGISTRATION.REGISTER_REQUEST:
            return {isSuccessful: false};
        case EventName.REGISTRATION.REGISTER_SUCCESS:
            return {messages: action.response.data.messages, isSuccessful: true};
        case EventName.REGISTRATION.REGISTER_FAIL:
            return {messages: action.response.data.messages, isSuccessful: false};
        default:
            return state
    }
}
