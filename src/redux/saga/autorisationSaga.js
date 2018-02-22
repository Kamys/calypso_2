import {call, put, take} from 'redux-saga/effects'
import Api from './../../api/Api'
import {AUTORISATION} from "../EventName";


function* autorisation() {
    try {
        const payload = yield call(Api.autorisation);
        yield put({type: AUTORISATION.AUTORISATION_SUCCESS, payload: payload.data});
    } catch (payload) {
        yield put({type: AUTORISATION.AUTORISATION_FAIL, payload});
    }
}


function* autorisationSaga() {
    while (true) {
        yield take(AUTORISATION.AUTORISATION_REQUEST);
        yield call(autorisation);
    }
}

export {autorisationSaga}