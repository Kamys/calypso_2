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
        dispatch({
            type: EventName.USER_ACCOUNT.CHECK_AUTORISATION, data: {
                isAutorisationSuccessful: true,
                fullName: result.data.fio,
                username: result.data.username,
                userType: result.data.type.id_type_user
            }
        })
    }

    function checkAutorisationFailed(error) {
        dispatch({
            type: EventName.USER_ACCOUNT.CHECK_AUTORISATION, data: {
                isAutorisationSuccessful: false
            }
        })
    }
};

export default checkAutorisation;