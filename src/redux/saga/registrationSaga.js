import { call, put, takeLatest } from 'redux-saga/effects'
import Api from './../../api/Api'
import EventName from "../EventName";


function* fetchUser(action) {
    try {
        let user = action.data;
        const response = yield call(Api.registration, user.fullName, user.login, user.password);
        yield put({type: EventName.REGISTRATION.REGISTER_SUCCESS, response});
    } catch (response) {
        yield put({type: EventName.REGISTRATION.REGISTER_FAIL, response});
    }
}


function* registrationSaga() {
    yield takeLatest(EventName.REGISTRATION.REGISTER_REQUEST, fetchUser);
}

export default registrationSaga;