import React, { useState, useRef, useEffect } from 'react';

import AuthModalView from './AuthModal-view';

import { AuthModalProps, User } from './types';

const AuthModal = ({ initLogin }: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [menuVisibility, setMenuVisibility] = React.useState(false);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const node= useRef<HTMLDivElement>(null);

  const handleMenuState = () => {
    setMenuVisibility(!menuVisibility)
  }
  
  const handleOutsideClick = (e:any) => {
    if(node.current != null)
      if (node.current.contains(e.target) )
        return;
    setMenuVisibility(false)

  };

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
    const { type } = event.target;
    const { value } = event.target;

    setUser(
      (prevState: User): User => {
        const userState: any = prevState;
        userState[type] = value;
        return { ...userState };
      }
    );
  };

  const handleLogin = () => initLogin(user.email, user.password);
  const handleUpdate = () => {};
  const handleRegister = () => {};

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
      handleMenuState={handleMenuState}
      menuVisibility={menuVisibility}
      user={user}
    />
  );
};

export default AuthModal;
