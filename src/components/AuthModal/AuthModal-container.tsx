import React, { useState, useEffect } from 'react';

import AuthModalView from './AuthModal-view';

import { AuthModalProps, User } from './types';

const AuthModal = ({
  onAuthUserAutoLogin,
  onAuthUser,
  onAuthUserForgetPassword,
  auth
}: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [shouldSignUp, setShouldSignUp] = useState(false);
  const [user, setUser] = useState({
    email: 'admin',
    password: 'admin'
  });

  useEffect(() => {
    setOpen(!auth.isAuth);
  }, [auth.isAuth]);

  useEffect(() => {
    // Auto login registered user
    onAuthUserAutoLogin();
  }, []);

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

  const handleBtnClick = (btn: boolean) => {
    if (btn && shouldSignUp || !btn && !shouldSignUp) return onAuthUser(user.email, user.password, btn);

    setShouldSignUp(prevState => !prevState);
  };

  const handleLogin = () => handleBtnClick(false);
  const handleSignUp = () => handleBtnClick(true);
  const handleForgetPassword = () => onAuthUserForgetPassword(user.email);

  return (
    <AuthModalView
      auth={auth}
      open={open}
      handleOpen={handleOpen}
      handleChange={handleChange}
      handleClose={handleClose}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      handleRememberMe={handleRememberMe}
      handleSwitchForms={handleSwitchForms}
      handleForgetPassword={handleForgetPassword}
      rememberMe={rememberMe}
      forgetPassword={forgetPassword}
      user={user}
      shouldSignUp={shouldSignUp}
    />
  );
};

export default AuthModal;
