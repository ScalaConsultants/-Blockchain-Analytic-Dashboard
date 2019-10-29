import React, { useState } from 'react';

import AuthModalView from './AuthModal-view';

import { AuthModalProps, User } from './types';

const AuthModal = ({ initLogin }: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

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

  const handleChange = (event: any) => {
    event.persist();
    const type = event.target.type;
    const value = event.target.value;

    setUser(
      (prevState: User): User => {
        const user: any = prevState;
        user[type] = value;
        return { ...user };
      }
    );
  };

  const handleLogin = () => initLogin(user.email, user.password);

  const handleUpdate = () => {};
  const handleRegister = () => {};

  return (
    <AuthModalView
      open={open}
      handleOpen={handleOpen}
      handleChange={handleChange}
      handleUpdate={handleUpdate}
      handleClose={handleClose}
      handleLogin={handleLogin}
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
