import React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useInputStyles, useLabelStyles, useModalStyles} from "./AuthModal-styles";
import clsx from "clsx";

const AuthModalLoginRegister = (props: any) => {
    const {
        handleChange,
        handleLogin,
        handleSwitchForms,
        handleRememberMe,
        rememberMe,
        user
    } = props;

    const classesModal = useModalStyles();
    const classesInput = useInputStyles();
    const classesLabel = useLabelStyles();
    const classesButtons = clsx([classesModal.flex, classesModal.buttons]);
    const classesRememberMe = clsx([classesModal.cursor, classesModal.optionsHeight, classesModal.flex, classesModal.font]);
    const classesForgetPassword = clsx([classesModal.cursor, classesModal.font, classesModal.marginLeftAuto]);
    const classesCircle = clsx(classesModal.circle, {
        [classesModal.circleActive]: rememberMe
    });

    return (
        <form noValidate className={classesModal.form}>
            <TextField
                InputProps={{ classes: classesInput, disableUnderline: true }}
                InputLabelProps={{ classes: classesLabel }}
                className={classesModal.textField}
                variant="filled"
                label="Email"
                id="auth-email"
                type="email"
                value={user.email}
                onChange={handleChange}
            />
            <TextField
                InputProps={{ classes: classesInput, disableUnderline: true }}
                InputLabelProps={{ classes: classesLabel }}
                className={classesModal.textField}
                variant="filled"
                label="Password"
                id="auth-password"
                type="password"
                value={user.password}
                onChange={handleChange}
            />
            <Grid container className={classesModal.options}>
                <Grid
                    item
                    className={classesRememberMe}
                    onClick={handleRememberMe}
                >
                    <div className={classesCircle}/>
                    Remember me
                </Grid>
                <Grid
                    item
                    className={classesForgetPassword}
                    onClick={handleSwitchForms}
                >
                    Forget password?
                </Grid>
            </Grid>
            <div className={classesButtons}>
                <Button onClick={handleLogin}>Login</Button>
                <Button>Sign up</Button>
            </div>
        </form>
    )
};

export default AuthModalLoginRegister;