/*eslint-disable react-hooks/exhaustive-deps*/

import { useEffect } from 'react';

import { AuthPropsTypes } from './types'

const Auth = ({ authCheck, children }: AuthPropsTypes) => {

    useEffect(() => {
        authCheck();
    }, []);

    return children;
};

export default Auth;