import {call, put, take, all, fork} from 'redux-saga/effects'
import Api from './../../api/Api'
import EventName from "../EventName";


function* registration(action) {
    try {
        let user = action.data;
        const response = yield call(Api.registration, user.fullName, user.login, user.password);
        yield put({type: EventName.REGISTRATION.REGISTER_SUCCESS, response});
    } catch (response) {
        yield put({type: EventName.REGISTRATION.REGISTER_FAIL, response});
    }
}

function* registrationSaga() {
    while (true){
        const action = yield take(EventName.REGISTRATION.REGISTER_REQUEST);
        yield call(registration, action);
    }
}

export {registrationSaga}