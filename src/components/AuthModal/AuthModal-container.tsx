import React, { useState, useEffect } from 'react';

import AuthModalView from './AuthModal-view';

import { validation, rules } from './helpers';
import { AuthModalProps, User } from './types';

const AuthModal = ({ onAuthUser, onAuthUserForgotPassword, auth }: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [shouldSignUp, setShouldSignUp] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [formValidation, setFormValidation] = useState({
    email: {
      isValid: true,
      msg: '',
    },
    password: {
      isValid: true,
      msg: '',
    },
    touched: {
      email: false,
      password: false
    }
  });

  const setInitialState = (): void => {
    setForgotPassword(false);
    setRememberMe(true);
    setShouldSignUp(false);
    setUser({
      email: '',
      password: ''
    });
    setFormValidation({
      email: {
        isValid: true,
        msg: '',
      },
      password: {
        isValid: true,
        msg: '',
      },
      touched: {
        email: false,
        password: false
      }
    })
  }

  const handleOpen = (): void => setOpen(prevState => !prevState);

  const handleClose = (): void => {
    setOpen(prevState => !prevState);
    setInitialState();
  };

  const handleSwitchForms = (): void => setForgotPassword(prevState => !prevState);

  const handleRememberMe = (): void => setRememberMe(prevState => !prevState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    const { type } = event.target;
    const { value } = event.target;

    setUser(
      (prevState: User): User => {
        const userState = { ...prevState };
        //@ts-ignore
        userState[type] = value;
        return userState;
      }
    );
  };

  const onFocus = (type: string): void => {
    const { email, password } = formValidation.touched;
    if (!email || !password) {
      setFormValidation(prevState => {
        const formState = { ...prevState };
        //@ts-ignore
        formState.touched[type] = true;
        return formState
      })
    }
  };

  const onBlur = (type: string): void => {
    const { email, password } = formValidation.touched;
    if (email || password) {
      // @ts-ignore
      const validationData = validation(user[type], rules[type], type);

      setFormValidation(prevState => {
        const formState = { ...prevState };
        //@ts-ignore
        formState[type] = validationData;
        return formState;
      })
    }
  };

  const btnClick = (btn: boolean): void => {
    const { email, password } = formValidation;
    if (email.isValid && password.isValid) {
      if ((btn && shouldSignUp) || (!btn && !shouldSignUp)) return onAuthUser(user.email, user.password, btn);
    }

    setShouldSignUp(prevState => !prevState);
  };

  const handleEmailFocus = () => onFocus('email');
  const handleEmailBlur = () => onBlur('email');
  const handlePasswordFocus = () => onFocus('password');
  const handlePasswordBlur = () => onBlur('password');
  const handleLogin = () => btnClick(false);
  const handleSignUp = () => btnClick(true);
  const handleForgotPassword = () => onAuthUserForgotPassword(user.email);

  useEffect(() => {
    setOpen(prevState => prevState && !auth.isAuth);
    setInitialState();
  }, [auth.isAuth]);

  return (
    <div>
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
        handleEmailFocus={handleEmailFocus}
        handleEmailBlur={handleEmailBlur}
        handlePasswordFocus={handlePasswordFocus}
        handlePasswordBlur={handlePasswordBlur}
        rememberMe={rememberMe}
        forgotPassword={forgotPassword}
        user={user}
        shouldSignUp={shouldSignUp}
        formValidation={formValidation}
      />
    </div>
  );
};

export default AuthModal;
