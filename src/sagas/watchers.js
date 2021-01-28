import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authentificationSaga';
import * as types from '../actions';

export default function* watchUserAuthentication() {
    yield takeLatest(types.LOGIN_USER, loginSaga);
}
