import {AUTORISATION} from "../EventName";


const autorisationRequest = () => {
    return {type: AUTORISATION.AUTORISATION_REQUEST};
};

const autorisationSuccess = () => {
    return {type: AUTORISATION.AUTORISATION_SUCCESS};
};

export {autorisationRequest, autorisationSuccess};