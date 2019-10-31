import { put } from 'redux-saga/effects';

import authActions from '../../actions/auth';
import { auth, authToken, authForgotPassword } from "./fetch";

import { AuthUser } from '../../actions/types'

export function* doAuthUser(action: AuthUser) {
    yield put(authActions.authUserStart()); 

    try {
        const response = yield auth({ ...action.data });
        console.log('res', response); //TODO: remove
        const { code } = response;

        if (code && code === 'user_added') {
            const actionData = { ...action.data };
            actionData.shouldSignUp = false;
            return yield put(authActions.authUserSignUpSuccess(actionData));
        }
        if (code && code === 'user_exists') 
            return yield put(authActions.authUserSignUpFail({ ...response }));
        if (code && code === 'login_error') 
            return yield put(authActions.authUserLoginFail({ ...response }));

        yield localStorage.setItem('token', response.token);
        yield localStorage.setItem('isAuth', response.isAuthenticated);
        yield put(authActions.authUserLoginSuccess({ ...response }))
        
    } catch(error) {
        console.log('auth_error', error); //TODO: remove
        yield put(authActions.authUserFail(error))
    }
}

export function* doAuthUserLogout() {
    yield console.log('logout'); //TODO: remove
    const token = yield localStorage.getItem('token');
    const isAuth = yield localStorage.getItem('isAuth');

    if (token) yield localStorage.removeItem('token');
    if (isAuth) yield localStorage.removeItem('isAuth');
}

export function* doAuthUserAuto() {
    yield console.log('auto'); //TODO: remove
    const token = yield localStorage.getItem('token');
    const isAuth = yield localStorage.getItem('isAuth');
    if (token && isAuth) {
        //TODO: req to BE to authenticate
        try {
            const response = yield authToken(token);
            const { code } = response;

            if (code && code === 'token_invalid')
                return yield put(authActions.authUserLogout());

            yield put(authActions.authUserLoginSuccess({ ...response }))
        } catch(error) {
            console.log('auto_error'); //TODO: remove
            yield put(authActions.authUserLogout());
        }
    } else {
        yield put(authActions.authUserLogout());
    }
}

export function* doAuthUserForgotPassword(action: AuthUser) {
    yield console.log('forgot_password'); //TODO remove
    yield put(authActions.authUserStart());

    try {
        const response = yield authForgotPassword({...action.data});
        const {code} = response;

        if (code && code === 'email_invalid') return yield put(authActions.authUserFail({...response}));

        yield put(authActions.authUserForgotPasswordSuccess({ ...response }))
    } catch (error) {
        yield put(authActions.authUserFail({ ...error }))
    }
}
 