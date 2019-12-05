/*eslint-disable react-hooks/exhaustive-deps*/

import { useEffect } from 'react';

import AuthModalResetPassword from './AuthModalResetPassword-view';
import { AuthResetPasswordProps } from './types';

const AuthResetPassword = ({ unmount }: AuthResetPasswordProps) => {

    useEffect(() => {

        return () => {
            unmount();
        }

    }, []);

    return <AuthModalResetPassword {...unmount}/>;
};

export default AuthResetPassword;