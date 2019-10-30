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

export interface AuthModalViewProps extends AuthState {
  open?: boolean;
  handleOpen?: () => void;
  handleClose?: () => void;
  handleUpdate?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin?: () => void;
  handleSignUp?: () => void;
  handleRegister?: () => void;
  handleSwitchForms?: () => void;
  handleRememberMe?: () => void;
  forgetPassword?: boolean;
  rememberMe?: boolean;
  user?: Record<string, string>;
}

export interface AuthModalFormProps {
  props: AuthModalViewProps;
}

export interface AuthModalProps extends AuthState {
  onAuthUser: (email: string, password: string, shouldSignUp: boolean) => void;
}

export interface User {
  email: string;
  password: string;
}
