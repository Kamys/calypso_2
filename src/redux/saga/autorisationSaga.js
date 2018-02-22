import {call, put, take, fork, all} from 'redux-saga/effects'
import Api from './../../api/Api'
import EventName from "../EventName";


function* autorisation() {
    try {
        const payload = yield call(Api.autorisation);
        yield put({type: EventName.AUTORISATION.AUTORISATION_SUCCESS, payload: payload.data});
    } catch (payload) {
        yield put({type: EventName.AUTORISATION.AUTORISATION_FAIL, payload});
    }
}


function* autorisationSaga() {
    while (true) {
        yield take(EventName.AUTORISATION.AUTORISATION_REQUEST);
        yield call(autorisation);
    }
}

export {autorisationSaga}