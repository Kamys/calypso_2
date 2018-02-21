import EventName from "../EventName";

function initState() {
    return {
        messages: []
    }
}

export default function registration(state = initState(), action) {
    switch (action.type) {
        case EventName.REGISTRATION.REGISTER_SUCCESS:
            debugger
            return action.response;
        case EventName.REGISTRATION.REGISTER_FAIL:
            debugger
            state.messages = action.response.data.messages;
            return state;
        default:
            return state
    }
}
