import authActions from '../actions/auth';

import { AuthState, AuthUserResponse } from './types';

const initState = {
  token: null,
  email: null,
  username: null,
  id: null,
  isAuth: false,
  isResetPassword: false,
  loading: false,
  error: null,
  message: null
};

const authUserStart = (state: AuthState) => ({
  ...state,
  loading: true
});

const authUserSignUpSuccess = (state: AuthState) => ({
  ...state,
  loading: false,
  error: null
});

const authUserLoginSuccess = (state: AuthState, action: AuthUserResponse) => {
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

const authUserLoginFail = (state: AuthState, action: AuthUserResponse) => {
  const { error } = action;
  return {
    ...state,
    loading: false,
    error
  }
};

const authUserSignUpFail = (state: AuthState, action: AuthUserResponse) => {
  const { error } = action;
  return {
    ...state,
    loading: false,
    error
  }
};

const authUserLogout = () => ({
  ...initState
});

const authUserForgotPasswordSuccess = (state: AuthState, action: AuthUserResponse) => {
  const { message } = action;
  return {
    ...state,
    message
  }
};

const authUserResetPasswordMount = (state: AuthState, action: AuthUserResponse) => {
  const { id, token } = action.data;
  return {
    ...state,
    id,
    token
  }
};

const authUserResetPasswordUnmount = (state: AuthState) => ({
  ...state,
  id: null,
  token: null
});

export default (state: AuthState = initState, action: AuthUserResponse) => {
  switch (action.type) {
    case authActions.AUTH_USER_START: return authUserStart(state);
    case authActions.AUTH_USER_LOGIN_SUCCESS: return authUserLoginSuccess(state, action);
    case authActions.AUTH_USER_LOGIN_FAIL: return authUserLoginFail(state, action);
    case authActions.AUTH_USER_SIGNUP_SUCCESS: return authUserSignUpSuccess(state);
    case authActions.AUTH_USER_SIGNUP_FAIL: return authUserSignUpFail(state, action);
    case authActions.AUTH_USER_LOGOUT: return authUserLogout();
    case authActions.AUTH_USER_FORGOT_PASSWORD: return authUserStart(state);
    case authActions.AUTH_USER_FORGOT_PASSWORD_SUCCESS: return authUserForgotPasswordSuccess(state, action);
    case authActions.AUTH_USER_RESET_PASSWORD_MOUNT: return authUserResetPasswordMount(state, action);
    case authActions.AUTH_USER_RESET_PASSWORD_UNMOUNT: return authUserResetPasswordUnmount(state);
    default: return state;
  }
};