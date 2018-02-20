import Api from "../../api/Api";
import EventName from "../EventName";
import {loadingStart, loadingStop} from "../actions/loadingAction";

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
    );

    function checkAutorisationSuccessful(result) {
        executeEvent(result, true);
    }

    function checkAutorisationFailed(error) {
        executeEvent(false);
    }

    function executeEvent(result, isAutorisationSuccessful) {
        dispatch({
            type: EventName.USER_ACCOUNT.CHECK_AUTORISATION, data: {
                isAutorisationSuccessful,
                fullName: result.data.fio,
                username: result.data.username,
                userType: result.data.type.id_type_user
            }
        })
    }
};

export default checkAutorisation;