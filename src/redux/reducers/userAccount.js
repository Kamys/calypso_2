import EventName from "../EventName";

function initState() {
    return {
        message: []
    }
}

export default function user(state = initState(), action) {
    if (action.type === EventName.USER_ACCOUNT.CHECK_AUTORISATION) {
        return action.data;
    }
    return state;
}