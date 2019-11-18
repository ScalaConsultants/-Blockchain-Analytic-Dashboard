import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import authActions from '../../store/actions/auth';

import AuthModal from './AuthModal-container';

import { AuthState } from './types';

const AuthModalRedux = () => {
  const mapState = ({ auth }: AuthState) => ({
    auth: {
      loading: auth.loading,
      error: auth.error,
      token: auth.token,
      email: auth.email,
      username: auth.username,
      isAuth: auth.isAuth
    }
  });

  const props = useMappedState(mapState);

  const dispatch = useDispatch();

  const onAuthUser = (email: string, password: string, shouldSignUp: boolean) => 
    dispatch(authActions.authUser({ email, password, shouldSignUp }));
    
  const onAuthUserForgotPassword = (email: string) => dispatch(authActions.authUserForgotPassword({email}));

  return (
      <AuthModal
          {...props}
          onAuthUser={onAuthUser}
          onAuthUserForgotPassword={onAuthUserForgotPassword}
      />
  )
};

export default AuthModalRedux;
