import Api from "../../api/Api";
import EventName from "../EventName";
import {loadingStart, loadingStop} from "../actions/loadingAction";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const checkAutorisation = () => dispatch => {
    dispatch(loadingStart());
    Api.ping().then(
        result => {
            checkAutorisationSuccessful(result);
            dispatch(loadingStop())
        },
        error => {
            checkAutorisationFailed(error);
            dispatch(loadingStop())
        }
    ).finally(

    );

    function checkAutorisationSuccessful() {
        executeEvent(true);
    }

    function checkAutorisationFailed() {
        executeEvent(false);
    }

    function executeEvent(isAutorisationSuccessful) {
        dispatch({type: EventName.USER_ACCOUNT.CHECK_AUTORISATION, data: {isAutorisationSuccessful}})
    }
};

export default checkAutorisation;