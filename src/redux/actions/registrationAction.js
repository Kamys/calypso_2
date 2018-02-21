import EventName from "../EventName";


const registrationRequest = (values) => {
    return {type: EventName.REGISTRATION.REGISTER_REQUEST, data: values};
};

export default registrationRequest;