import Api from "../../api/Api";
import EventName from "../EventName";


const registrationRequest = (fullName, login, password) => dispatch => {
	Api.registration(fullName, login, password,).then(
		result => {
			debugger
			executeDispatch(result, false);
		},
		error => {
			executeDispatch(error.data.messages, true);
		}
	);

	function executeDispatch(messages, isError) {
		dispatch({type: EventName.REGISTRATION.REGISTER_REQUEST, data: {messages, isError}})
	}
};

export default registrationRequest;