import EventName from "../EventName";


const autorisationRequest = () => {
    return {type: EventName.AUTORISATION.AUTORISATION_REQUEST};
};

const autorisationSuccess = () => {
    return {type: EventName.AUTORISATION.AUTORISATION_SUCCESS};
};

export {autorisationRequest, autorisationSuccess};