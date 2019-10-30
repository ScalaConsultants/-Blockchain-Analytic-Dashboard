import { AuthUser, AuthUserData } from '../types';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_START = 'AUTH_USER_START';
export const AUTH_USER_SIGNUP_SUCCESS = 'AUTH_USER_SIGNUP_SUCCESS';
export const AUTH_USER_SIGNUP_FAIL = 'AUTH_USER_SIGNUP_FAIL';
export const AUTH_USER_LOGIN_SUCCESS = 'AUTH_USER_LOGIN_SUCCESS';
export const AUTH_USER_LOGIN_FAIL = 'AUTH_USER_LOGIN_FAIL';
export const AUTH_USER_FAIL = 'AUTH_USER_FAIL';

export const authUser = (data: AuthUserData): AuthUser => ({
  type: AUTH_USER,
  data
});

export const authUserStart = () => ({
  type: AUTH_USER_START
});

export const authUserSignUpSuccess = (data: AuthUserData) => {
  return {
    type: AUTH_USER_SIGNUP_SUCCESS,
    data
  };
};

export const authUserLoginSuccess = (data: AuthUserData) => ({
  type: AUTH_USER_LOGIN_SUCCESS,
  data
});

export const authUserSignUpFail = (error: AuthUser) => ({
  type: AUTH_USER_SIGNUP_FAIL,
  error
});

export const authUserLoginFail = (error: AuthUser) => ({
  type: AUTH_USER_LOGIN_FAIL,
  error
});

export const authUserFail = (error: AuthUser) => ({
  type: AUTH_USER_FAIL,
  error
});