export interface AuthModalViewProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleUpdate: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  handleRegister: () => void;
  handleSwitchForms: () => void;
  handleRememberMe: () => void;
  forgetPassword: boolean;
  rememberMe: boolean;
  user: Record<string, string>
};

export interface AuthModalProps {
  initLogin: (email: string, password: string) => void;
}

export interface User {
  email: string,
  password: string
}
