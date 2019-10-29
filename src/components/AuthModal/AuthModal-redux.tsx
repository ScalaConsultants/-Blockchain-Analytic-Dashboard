import React from 'react';
import { useDispatch } from 'redux-react-hook';

import { initAuthLogin } from '../../store/actions/auth';

import AuthModal from './AuthModal-container';

const AuthModalRedux = () => {
  const dispatch = useDispatch();
  const onAuth = (email: string, password: string) => dispatch(initAuthLogin(email, password));

  return <AuthModal initLogin={onAuth} />;
};

export default AuthModalRedux;
