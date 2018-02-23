import {AUTORISATION} from "../EventName";


const autorisationRequest = (payload) => {
    return {type: AUTORISATION.AUTORISATION_REQUEST, payload};
};

const autorisationSuccess = (payload) => {
    return {type: AUTORISATION.AUTORISATION_SUCCESS, payload};
};

const autorisationFail = (payload) => {
    return {type: AUTORISATION.AUTORISATION_FAIL, payload};
};

export {autorisationRequest, autorisationSuccess, autorisationFail};