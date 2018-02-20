import EventName from "../EventName";

function initState() {
	return {
        message: []
	}
}

export default function registration(state = initState(), action) {
	if (action.type === EventName.REGISTRATION.REGISTER_REQUEST) {
		return action.data;
	}
	return state;
}