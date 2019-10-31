import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { useInputStyles, useLabelStyles, useModalStyles } from './AuthModal-styles';

import { AuthModalViewProps } from './types';

const AuthModalForgotPassword = (props: AuthModalViewProps) => {
  const {
    handleSwitchForms,
    handleChange,
    handleForgotPassword,
    handleEmailFocus,
    handleEmailBlur,
    user = {
    email: ''
    },
    formValidation = {
      email: {
        isValid: true,
      }
    }
  } = props;

  const classesModal = useModalStyles();
  const classesInput = useInputStyles();
  const classesLabel = useLabelStyles();
  const classesButtons = clsx([classesModal.flex, classesModal.buttons]);

  return (
    <form noValidate className={classesModal.form}>
      <TextField
        InputProps={{ classes: classesInput, disableUnderline: true }}
        InputLabelProps={{ classes: classesLabel }}
        className={classesModal.textField}
        error={!formValidation.email.isValid}
        variant="filled"
        label="Email"
        value={user.email}
        id="auth-email"
        type="email"
        onChange={handleChange}
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
      />
      <div className={classesButtons}>
        <Button onClick={handleForgotPassword}>Send</Button>
        <Button onClick={handleSwitchForms}>Login</Button>
      </div>
    </form>
  );
};

export default AuthModalForgotPassword;
