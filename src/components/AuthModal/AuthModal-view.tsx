import React from 'react';
import clsx from 'clsx';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Loader from '../loader';

import AuthModalLoginRegister from './AuthModalLoginRegister-view';
import AuthModalForgotPassword from './AuthModalForgotPassword-view';

import { useModalStyles, loaderContainerStyles } from './AuthModal-styles';
import { AuthModalViewProps } from './types';

const AuthModalView = (props: AuthModalViewProps) => {
  const {
    open = false,
    handleOpen,
    handleClose,
    forgotPassword,
    auth,
    shouldSignUp,
    formValidation = {
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
    }
  } = props;

  const loading = auth && auth.loading || false;
  const btn = auth && auth.isAuth ? auth.username : 'Log in';
  const btnHandler = (auth && auth.isAuth) ? undefined : handleOpen;

  const classesModal = useModalStyles();
  const classesPaper = clsx([classesModal.paper, classesModal.grey]);
  const classesLogin = clsx([classesModal.cursor, classesModal.flex]);
  const classesLogo = clsx([classesModal.marginTop40, classesModal.flex]);
  const classesTitle = clsx([classesModal.title, classesModal.flex]);
  const classesInfo = clsx([classesModal.flex, classesModal.info]);

  const { PUBLIC_URL } = process.env;

  const text = forgotPassword
      ? 'Recovery your password'
      : !shouldSignUp
      ? 'Login into your account'
      : 'Create new account';

  const form = forgotPassword ? <AuthModalForgotPassword {...props} /> : <AuthModalLoginRegister {...props} />;

  const info = (!formValidation.email.isValid || !formValidation.password.isValid)
      ? <div>
          <div>{formValidation.email.msg}</div>
          <div>{formValidation.password.msg}</div>
        </div>
      : <Loader
      isLoading={loading}
      loaderSize={20}
      containerClass={loaderContainerStyles}
  />;

  return (
    <>
      <div className={classesLogin} onClick={btnHandler}>
        <Typography variant="body1" color="secondary">
          {btn}
        </Typography>
        <ArrowDropDownIcon color="secondary" />
      </div>
      <Modal
        aria-labelledby="edit-wallet-modal-title"
        aria-describedby="edit-wallet-modal-description"
        className={classesModal.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classesPaper}>
            <Grid container justify="flex-start" direction="column" alignItems="stretch">
              <Grid item className={classesLogo}>
                <img src={`${PUBLIC_URL}/icons/logo.png`} alt="logo" className={classesModal.img} />
              </Grid>
              <Grid item className={classesTitle}>
                <Typography variant="h2" color="secondary" align="center">
                  <span>Blockchain analytic </span>
                  dashboard
                </Typography>
              </Grid>
              <Grid item className={classesInfo}>
                {info}
              </Grid>
              <Grid item>
                <Typography className={classesModal.marginTop28} color="textPrimary" align="center">
                  {text}
                </Typography>
                {form}
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default AuthModalView;
