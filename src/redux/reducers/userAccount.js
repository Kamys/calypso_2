import EventName from "../EventName";

export default function userAccount(state = [], action) {
	if (action.type === EventName.REGISTRATION_USER) {
		state.errors = "Server failed!!!";
		return state;
	} else if (action.type === EventName.LOGIN_USER) {
		return state;
	}
	return state;
}