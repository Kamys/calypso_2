import EventName from "../EventName";

function initState() {
    return {
        isDataLoading: true,
    }
}

export default function loading(state = initState(), action) {
    if (action.type === EventName.LOADING.LOADING_START) {
        return {isDataLoading: true};
    } else if (action.type === EventName.LOADING.LOADING_STOP) {
        return {isDataLoading: false};
    }
    return state;
}