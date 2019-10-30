import React, { useState, useEffect } from 'react';

import AuthModalView from './AuthModal-view';

import { AuthModalProps, User } from './types';

const AuthModal = ({ onAuthUser, auth }: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    setOpen(!auth.isAuth);
  }, [auth.isAuth]);

  const handleOpen = () => setOpen(prevState => !prevState);

  const handleClose = () => {
    setOpen(prevState => !prevState);
    setForgetPassword(false);
    setRememberMe(true);
    setUser({
      email: '',
      password: ''
    });
  };

  const handleSwitchForms = () => setForgetPassword(prevState => !prevState);

  const handleRememberMe = () => setRememberMe(prevState => !prevState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const { type } = event.target;
    const { value } = event.target;

    setUser(
      (prevState: User): User => {
        const userState = prevState;
        //@ts-ignore
        userState[type] = value;
        return { ...userState };
      }
    );
  };

  const handleLogin = () => onAuthUser(user.email, user.password, false);
  const handleSignUp = () => onAuthUser(user.email, user.password, true);

  const handleUpdate = () => {};
  const handleRegister = () => {};

  return (
    <AuthModalView
      auth={auth}
      open={open}
      handleOpen={handleOpen}
      handleChange={handleChange}
      handleUpdate={handleUpdate}
      handleClose={handleClose}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      handleRegister={handleRegister}
      handleRememberMe={handleRememberMe}
      handleSwitchForms={handleSwitchForms}
      rememberMe={rememberMe}
      forgetPassword={forgetPassword}
      user={user}
    />
  );
};

export default AuthModal;
