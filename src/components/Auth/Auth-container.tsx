import { useEffect } from 'react';

import { AuthPropsTypes } from './types'

const Auth = ({ authCheck, children }: AuthPropsTypes) => {

    useEffect(() => {
        const authCheckEffect = ()=> {
            authCheck();
        }

        authCheckEffect();
    }, []);

    return children;
};

export default Auth;