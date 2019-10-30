import { takeEvery } from 'redux-saga/effects';

import authActions from '../../actions/auth';

import { doAuthUser } from './user';

export default function* watchAuth() {
  yield takeEvery(authActions.AUTH_USER, doAuthUser);
  yield takeEvery(authActions.AUTH_USER_SIGNUP_SUCCESS, doAuthUser);
}