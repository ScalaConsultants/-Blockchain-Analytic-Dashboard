import React, {PropsWithChildren } from "react";

import Auth from "./Auth-container";

const AuthRedux = (props: PropsWithChildren<any>) => {

    const authCheck = () => {
        // disable auto check
        // dispatch(authActions.authCheck())
    };

    return <Auth authCheck={authCheck} children={props.children}/>
};

export default AuthRedux;