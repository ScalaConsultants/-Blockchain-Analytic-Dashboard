export interface AuthState {
  auth: { 
    loading?: boolean;
    error?: null | string;
    token?: null | string;
    email?: null | string;
    username?: null | string;
    isAuth?: boolean;
  }
}

export interface FormValidation {
  email: {
    isValid: boolean;
    msg: string,
  },
  password: {
    isValid: boolean,
    msg: string,
  },
  touched: {
    email: boolean,
    password: boolean
  }
}

export interface AuthModalViewProps extends AuthState {
  open?: boolean;
  handleOpen?: () => void;
  handleClose?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin?: () => void;
  handleSignUp?: () => void;
  handleSwitchForms?: () => void;
  handleRememberMe?: () => void;
  handleForgotPassword?: () => void;
  handleChangePassword?: () => void;
  handleEmailFocus?: () => void;
  handleEmailBlur?: () => void;
  handlePasswordFocus?: () => void;
  handlePasswordBlur?: () => void;
  forgotPassword?: boolean;
  rememberMe?: boolean;
  user?: Record<string, string>;
  shouldSignUp?: boolean;
  formValidation?: FormValidation;
}

export interface AuthModalFormProps {
  props: AuthModalViewProps;
}

export interface AuthModalProps extends AuthState {
  onAuthUser: (email: string, password: string, shouldSignUp: boolean) => void;
  onAuthUserForgotPassword: (email: string) => void;
}

export interface User {
  email: string;
  password: string;
}

export interface AuthValidationRules {
  required?: boolean;
  isEmail?: boolean;
  minLength?: number;
  maxLength?: number;
}

