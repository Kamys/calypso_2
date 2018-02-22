import {fork} from 'redux-saga/effects'
import {registrationSaga} from './registrationSaga'
import {autorisationSaga} from './autorisationSaga'

export  default function* rootSaga () {
    yield [
        fork(registrationSaga),
        fork(autorisationSaga),
    ];
}