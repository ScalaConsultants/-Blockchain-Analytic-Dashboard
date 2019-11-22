/*eslint-disable react-hooks/exhaustive-deps*/

import { useEffect } from 'react';

import { AuthResetPasswordProps } from './types';

const AuthResetPassword = ({ unmount }: AuthResetPasswordProps) => {

    useEffect(() => {

        return () => {
            unmount();
        }

    }, []);

    return null;
};

export default AuthResetPassword;