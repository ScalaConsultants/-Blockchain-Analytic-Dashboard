import React, { useState, useEffect } from 'react';

import AuthModalView from './AuthModal-view';

import { AuthModalProps, User } from './types';

const AuthModal = ({
  onAuthUser,
  onAuthUserForgotPassword,
  auth
}: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [shouldSignUp, setShouldSignUp] = useState(false);
  const [user, setUser] = useState({
    email: 'admin',
    password: 'admin'
  });

  useEffect(() => {
    setOpen(prevState => prevState && !auth.isAuth);
  }, [auth.isAuth]);

  const handleOpen = () => setOpen(prevState => !prevState);

  const handleClose = () => {
    setOpen(prevState => !prevState);
    setForgotPassword(false);
    setRememberMe(true);
    setUser({
      email: '',
      password: ''
    });
  };

  const handleSwitchForms = () => setForgotPassword(prevState => !prevState);

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
  const handleForgotPassword = () => onAuthUserForgotPassword(user.email);

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
      handleForgotPassword={handleForgotPassword}
      rememberMe={rememberMe}
      forgotPassword={forgotPassword}
      user={user}
      shouldSignUp={shouldSignUp}
    />
  );
};

export default AuthModal;
