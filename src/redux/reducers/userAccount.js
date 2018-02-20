import EventName from "../EventName";

function initState() {
    return {
        isAutorisationSuccessful: false,
    }
}

export default function userAccount(state = initState(), action) {
    if (action.type === EventName.USER_ACCOUNT.CHECK_AUTORISATION) {
        return action.data;
    }
    return state;
}