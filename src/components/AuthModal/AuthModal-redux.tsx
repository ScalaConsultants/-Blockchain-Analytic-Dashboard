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
  const onAuthUser = (email: string, password: string, shouldSignUp: boolean) => {
    // switch to stable db
    // dispatch(authActions.authUser({ email, password, shouldSignUp }));
  }

  return <AuthModal onAuthUser={onAuthUser} {...props} />;
};

export default AuthModalRedux;
