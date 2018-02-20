import Api from "../../api/Api";
import EventName from "../EventName";


const registrationRequest = (values) => dispatch => {
    Api.registration(values.fullName, values.login, values.password,).then(
        result => {
            registrationRequestSuccessful(result.data.messages, result.data.auth_token);
        },
        error => {
            registrationRequestFailed(error.data.messages);
        }
    );

    function registrationRequestSuccessful(messages, authToken) {
        executeEvent(messages, true, authToken);
    }

    function registrationRequestFailed(messages) {
        executeEvent(messages, false);
    }

    function executeEvent(messages, isSuccessful, authToken = "") {
        dispatch({type: EventName.REGISTRATION.REGISTER_REQUEST, data: {messages, isSuccessful, authToken}})
    }
};

export default registrationRequest;