import authActions from '../actions/auth';

const initState = {
  token: null,
  email: null,
  username: null,
  isAuth: false,
  loading: false,
  error: null
}

const authUserStart = (state: any) => ({
  ...state,
  loading: true
});

const authUserSignUpSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
  error: null
});

const authUserLoginSuccess = (state: any, action: any) => {
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

const authUserLoginFail = (state: any, action: any) => {
  const { error } = action;
  return {
    ...state,
    loading: false,
    error
  }
};

const authUserSignUpFail = (state: any, action: any) => {
  const { error } = action;
  return {
    ...state,
    loading: false,
    error
  }
};

export default (state = initState, action: any): any => {
  switch (action.type) {
    case authActions.AUTH_USER_START: return authUserStart(state);
    case authActions.AUTH_USER_LOGIN_SUCCESS: return authUserLoginSuccess(state, action);
    case authActions.AUTH_USER_LOGIN_FAIL: return authUserLoginFail(state, action);
    case authActions.AUTH_USER_SIGNUP_SUCCESS: return authUserSignUpSuccess(state, action);
    case authActions.AUTH_USER_SIGNUP_FAIL: return authUserSignUpFail(state, action);
    default: return state;
  }
};