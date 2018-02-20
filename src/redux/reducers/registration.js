import EventName from "../EventName";
import Api from "./../../api/Api";

export default function registration(state = [], action) {
	if (action.type === EventName.REGISTRATION.REGISTER_REQUEST) {
		return action.data;
	} else if (action.type === EventName.LOGIN_USER) {
		return state;
	}
	return state;
}