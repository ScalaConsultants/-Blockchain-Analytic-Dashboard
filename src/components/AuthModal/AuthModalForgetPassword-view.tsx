import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useInputStyles, useLabelStyles, useModalStyles } from './AuthModal-styles';
import clsx from 'clsx';

const AuthModalForgetPassword = (props: any) => {
  const { handleSwitchForms, handleChange, user } = props;

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
        variant="filled"
        label="Email"
        value={user.email}
        id="auth-email"
        type="email"
        onChange={handleChange}
      />
      <div className={classesButtons}>
        <Button>Send</Button>
        <Button onClick={handleSwitchForms}>Back to login</Button>
      </div>
    </form>
  );
};

export default AuthModalForgetPassword;
