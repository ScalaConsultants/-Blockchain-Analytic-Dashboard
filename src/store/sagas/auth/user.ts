import { put } from 'redux-saga/effects';

import authActions from '../../actions/auth'; 

import { AuthUser } from '../../actions/auth/types'

async function auth(data: any): Promise<any> {
    const { shouldSignUp } = data;
    let url = 'api/v1/auth/login';

    if (shouldSignUp) {
        url = 'api/v1/auth/signup';
        data.username = 'Test'
    }

    delete data.shouldSignUp;

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/${url}`, options)
  
    return await response.json();
}

export function* doAuthUser(action: AuthUser) {
    yield put(authActions.authUserStart()); 

    try {
        const response = yield auth({ ...action.data });
        const { code } = response;

        if (code && code === 'user_added') {
            const actionData = { ...action.data };
            actionData.shouldSignUp = false;
            return yield put(authActions.authUserSignUpSuccess(actionData));
        };
        if (code && code === 'user_exists') 
            return yield put(authActions.authUserSignUpFail({ ...response }));
        if (code && code === 'login_error') 
            return yield put(authActions.authUserLoginFail({ ...response }));

        yield localStorage.setItem('token', response.token);
        yield localStorage.setItem('isAuth', response.isAuthenticated);
        yield put(authActions.authUserLoginSuccess({ ...response }))
        
    } catch(error) {
        console.log('error')
        yield put(authActions.authUserFail(error))
    }
}
 