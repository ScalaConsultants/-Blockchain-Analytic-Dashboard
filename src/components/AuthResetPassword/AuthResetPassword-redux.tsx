import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'redux-react-hook';

import authActions from '../../store/actions/auth';

import AuthResetPassword from "./AuthResetPassword-container";

import { AuthResetPasswordRouterProps } from './types';

const AuthResetPasswordRedux = (props: AuthResetPasswordRouterProps) => {
    const { id, token } = props.match.params;

    const dispatch = useDispatch();

    const unmount = () => dispatch(authActions.authUserResetPasswordUnmount());

    dispatch(authActions.authUserResetPasswordMount({ id, token }));

    return <AuthResetPassword unmount={unmount}/>;
};

export default withRouter(AuthResetPasswordRedux);