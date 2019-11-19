import { put, delay } from 'redux-saga/effects';

import authActions from '../../actions/auth';
import { authLogin, authSign } from "./fetch";

import { AuthUser } from '../../actions/types'

export function* doAuthUser(action: AuthUser) {
    yield put(authActions.authUserStart());

    try {
        const { shouldSignUp } = action.data;
        const data = { ...action.data };
        let response = null;

        delete data.shouldSignUp;
        
        if (shouldSignUp) {
            response = yield authSign(data);
            yield put(authActions.authUserSignUpSuccess());
            yield put(authActions.authUserSignUpSuccessNotification(response));
            
            yield delay(1000);
            yield put(authActions.authUserLoginAuto());
            
            response = yield authLogin(data);
            yield localStorage.setItem('token', response.token);
            yield localStorage.setItem('isAuth', response.isAuthenticated);
            yield put(authActions.authUserLoginSuccess(response));
            yield put(authActions.authUserLoginSuccessNotification(response.msg));
            
            return;
        };

        response = yield authLogin(data);
        yield localStorage.setItem('token', response.token);
        yield localStorage.setItem('isAuth', response.isAuthenticated);
        yield put(authActions.authUserLoginSuccess(response));
        yield put(authActions.authUserLoginSuccessNotification(response.msg));
        
    } catch(error) {
        yield put(authActions.authUserFail());
        yield put(authActions.authUserFailNotification(error.message));
    }
}

export function* doAuthUserLogout() {
    const token = yield localStorage.getItem('token');
    const isAuth = yield localStorage.getItem('isAuth');

    if (token) yield localStorage.removeItem('token');
    if (isAuth) yield localStorage.removeItem('isAuth');
}

export function* doAuthCheck() {
    const token = yield localStorage.getItem('token');
    const isAuth = yield localStorage.getItem('isAuth');
    if (token && isAuth) {
        //TODO: req to BE to authenticate
        // try {
        //     const response = yield authToken(token);
        //     const { code } = response;

        //     if (code && code === 'token_invalid')
        //         return yield put(authActions.authUserLogout());

        //     yield put(authActions.authUserLoginSuccess({ ...response }))
        // } catch(error) {
        //     yield put(authActions.authUserLogout());
        // }
    } else {
        yield put(authActions.authUserLogout());
    }
}

export function* doAuthUserForgotPassword(action: AuthUser) {
    yield put(authActions.authUserStart());

    // try {
    //     const response = yield authForgotPassword({...action.data});
    //     const {code} = response;

    //     // if (code && code === 'email_invalid') return yield put(authActions.authUserFail({...response}));

    //     yield put(authActions.authUserForgotPasswordSuccess({ ...response }))
    // } catch (error) {
    //     // yield put(authActions.authUserFail({ ...error }))
    // }
}
 