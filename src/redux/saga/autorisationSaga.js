import {call, put, take} from 'redux-saga/effects'
import Api from './../../api/Api'
import {AUTORISATION} from "../EventName";
import {autorisationFail, autorisationSuccess} from "../actions/autorisationAction"


function* autorisation() {
    try {
        const payload = yield call(Api.autorisation);
        yield put(autorisationSuccess(payload.data));
    } catch (payload) {
        yield put(autorisationFail(payload));
    }
}


function* autorisationSaga() {
    while (true) {
        yield take(AUTORISATION.AUTORISATION_REQUEST);
        yield call(autorisation);
    }
}

export {autorisationSaga}