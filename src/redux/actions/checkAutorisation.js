import Api from "../../api/Api";
import EventName from "../EventName";


const checkAutorisation = (values) => dispatch => {
    Api.ping().then(
        result => {
            checkAutorisationSuccessful();
        },
        error => {
            checkAutorisationFailed();
        }
    );

    function checkAutorisationSuccessful() {
        executeEvent();
    }

    function checkAutorisationFailed() {
        executeEvent();
    }

    function executeEvent() {
        dispatch({type: EventName.USER_ACCOUNT.CHECK_AUTORISATION, data: {}})
    }
};

export default registrationRequest;