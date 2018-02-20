import Api from "../../api/Api";
import EventName from "../EventName";


const registrationRequest = (fullName, login, password) => dispatch => {
	Api.registration(fullName, login, password,).then(
		result => {
			executeDispatch(result, false);
		},
		error => {
			executeDispatch(error, true);
		}
	);

	function executeDispatch(massages, isError) {
		dispatch({type: EventName.REGISTRATION.REGISTER_REQUEST, data: {massages, isError}})
	}
};

export default registrationRequest;