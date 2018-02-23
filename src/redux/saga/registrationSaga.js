import {call, put, take} from 'redux-saga/effects'
import Api from './../../api/Api'
import {REGISTRATION} from "../EventName";
import {registrationSuccess, registrationFail} from "../actions/registrationAction";


function* registration(action) {
    try {
        let user = action.payload;
        const payload = yield call(Api.registration, user.fullName, user.login, user.password);
        yield put(registrationSuccess(payload));
    } catch (payload) {
        yield put(registrationFail(payload));
    }
}

function* registrationSaga() {
    while (true) {
        const action = yield take(REGISTRATION.REGISTER_REQUEST);
        yield call(registration, action);
    }
}

export {registrationSaga}