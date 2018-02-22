import {call, put, take} from 'redux-saga/effects'
import Api from './../../api/Api'
import {REGISTRATION} from "../EventName";


function* registration(action) {
    try {
        let user = action.payload;
        const payload = yield call(Api.registration, user.fullName, user.login, user.password);
        yield put({type: REGISTRATION.REGISTER_SUCCESS, payload});
    } catch (payload) {
        yield put({type: REGISTRATION.REGISTER_FAIL, payload});
    }
}

function* registrationSaga() {
    while (true) {
        const action = yield take(REGISTRATION.REGISTER_REQUEST);
        yield call(registration, action);
    }
}

export {registrationSaga}