import EventName from "../EventName";


const loadingStart = () => dispatch => {
    dispatch({type: EventName.LOADING.LOADING_START})
};

const loadingStop = () => dispatch => {
    dispatch({type: EventName.LOADING.LOADING_STOP})
};

export {loadingStart,loadingStop};