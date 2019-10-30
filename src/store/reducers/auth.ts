import authActions from '../actions/auth';

import { AuthState } from '../../types';
import { AuthUserResponse } from '../actions/auth/types';

const initState = {
  token: null,
  email: null,
  username: null,
  isAuth: false,
  loading: false,
  error: null
}

const authUserStart = (state: AuthState): AuthState => ({
  ...state,
  loading: true
});

const authUserSignUpSuccess = (state: AuthState): AuthState => ({
  ...state,
  loading: false,
  error: null
});

const authUserLoginSuccess = (state: AuthState, action: AuthUserResponse): AuthState => {
  const { token, user, isAuthenticated } = action.data;
  return {
    ...state,
    loading: false,
    error: null,
    token,
    email: user.email,
    username: user.username,
    isAuth: isAuthenticated
  }
};

const authUserLoginFail = (state: AuthState, action: AuthUserResponse): AuthState => {
  const { error } = action;
  return {
    ...state,
    loading: false,
    error
  }
};

const authUserSignUpFail = (state: AuthState, action: AuthUserResponse): AuthState => {
  const { error } = action;
  return {
    ...state,
    loading: false,
    error
  }
};

export default (state = initState, action: AuthUserResponse): AuthState => {
  switch (action.type) {
    case authActions.AUTH_USER_START: return authUserStart(state);
    case authActions.AUTH_USER_LOGIN_SUCCESS: return authUserLoginSuccess(state, action);
    case authActions.AUTH_USER_LOGIN_FAIL: return authUserLoginFail(state, action);
    case authActions.AUTH_USER_SIGNUP_SUCCESS: return authUserSignUpSuccess(state);
    case authActions.AUTH_USER_SIGNUP_FAIL: return authUserSignUpFail(state, action);
    default: return state;
  }
};