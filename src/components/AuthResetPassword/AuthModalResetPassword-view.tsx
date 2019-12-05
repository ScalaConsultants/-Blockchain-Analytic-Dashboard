import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { useInputStyles, useLabelStyles, useModalStyles } from '../AuthModal/AuthModal-styles';

const AuthModalResetPassword = (props: any) => {
  const {
    handleChange,
    handleChangePassword,
    user = {
    password: ''
    },
    formValidation = {
      password: {
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
        error={!formValidation.password.isValid}
        variant="filled"
        label="Password"
        value={user.password}
        id="auth-password"
        type="password"
        onChange={handleChange}
      />
      <div className={classesButtons}>
        <Button onClick={handleChangePassword}>OK</Button>
      </div>
    </form>
  );
};

export default AuthModalResetPassword;
