import React, { useEffect } from 'react';

import { AuthResetPasswordProps } from './types';

const AuthResetPassword = ({ unmount }: AuthResetPasswordProps) => {

    useEffect(() => {

        return () => {
            console.log('unmount');
            unmount();
        }

    }, []);

    return null;
};

export default AuthResetPassword;