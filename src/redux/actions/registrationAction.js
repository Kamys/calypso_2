import EventName from "../EventName";


const registrationRequest = (values) => {
    return {type: EventName.REGISTRATION.REGISTER_REQUEST, data: values};
};

const registrationSuccess = (values) => {
    return {type: EventName.REGISTRATION.REGISTER_SUCCESS, data: values};
};

export {registrationRequest, registrationSuccess};