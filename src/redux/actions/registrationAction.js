import {REGISTRATION} from "../EventName";

const registrationRequest = (payload) => {
    return {type: REGISTRATION.REGISTER_REQUEST, payload};
};

const registrationSuccess = (payload) => {
    return {type: REGISTRATION.REGISTER_SUCCESS, payload};
};

const registrationFail = (payload) => {
    return {type: REGISTRATION.REGISTER_FAIL, payload};
};

export {registrationRequest, registrationSuccess, registrationFail};