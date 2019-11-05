import { AuthUser, AuthUserData } from '../types';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_START = 'AUTH_USER_START';
export const AUTH_USER_SIGNUP_SUCCESS = 'AUTH_USER_SIGNUP_SUCCESS';
export const AUTH_USER_SIGNUP_FAIL = 'AUTH_USER_SIGNUP_FAIL';
export const AUTH_USER_LOGIN_SUCCESS = 'AUTH_USER_LOGIN_SUCCESS';
export const AUTH_USER_LOGIN_FAIL = 'AUTH_USER_LOGIN_FAIL';
export const AUTH_USER_FAIL = 'AUTH_USER_FAIL';
export const AUTH_USER_LOGOUT = 'AUTH_USER_LOGOUT';
export const AUTH_USER_FORGOT_PASSWORD = 'AUTH_USER_FORGOT_PASSWORD';
export const AUTH_USER_FORGOT_PASSWORD_SUCCESS = 'AUTH_USER_FORGOT_PASSWORD_SUCCESS';
export const AUTH_USER_RESET_PASSWORD_MOUNT = 'AUTH_USER_RESET_PASSWORD_MOUNT';
export const AUTH_USER_RESET_PASSWORD_UNMOUNT = 'AUTH_USER_RESET_PASSWORD_UNMOUNT';
export const AUTH_CHECK = 'AUTH_CHECK';

export const authUser = (data: AuthUserData): AuthUser => ({
  type: AUTH_USER,
  data
});

export const authUserStart = () => ({
  type: AUTH_USER_START
});

export const authCheck = () => ({
  type: AUTH_CHECK
});

export const authUserLoginSuccess = (data: AuthUserData) => ({
  type: AUTH_USER_LOGIN_SUCCESS,
  data
});

export const authUserLoginFail = (error: AuthUser) => ({
  type: AUTH_USER_LOGIN_FAIL,
  error
});

export const authUserSignUpSuccess = (data: AuthUserData) => {
  return {
    type: AUTH_USER_SIGNUP_SUCCESS,
    data
  };
};

export const authUserSignUpFail = (error: AuthUser) => ({
  type: AUTH_USER_SIGNUP_FAIL,
  error
});

export const authUserLogout = () => ({
  type: AUTH_USER_LOGOUT
});

export const authUserForgotPassword = (data: AuthUserData) => ({
  type: AUTH_USER_FORGOT_PASSWORD,
  data
});

export const authUserForgotPasswordSuccess = (data: AuthUserData) => ({
  type: AUTH_USER_FORGOT_PASSWORD_SUCCESS,
  data
});

export const authUserResetPasswordMount = (data: any) => ({
  type: AUTH_USER_RESET_PASSWORD_MOUNT,
  data
});

export const authUserResetPasswordUnmount = () => ({
  type: AUTH_USER_RESET_PASSWORD_UNMOUNT
});

export const authUserFail = (error: AuthUser) => ({
  type: AUTH_USER_FAIL,
  error
});