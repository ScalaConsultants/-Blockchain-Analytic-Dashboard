import {ActionType, Wallet} from '../../types';

export interface SetWalletsActionReducer {
  type: string;
  wallets: Wallet[]
}

export interface AuthState {
  token: null | string
  email: null | string
  username: null | string
  id: null | string
  isAuth: boolean,
  isResetPassword: boolean
  loading: boolean
  error: null | {
    code?: string
    msg?: string
  }
}

export interface AuthUserResponse extends ActionType {
  data: {
    token: null | string
    id: null | string
    isAuthenticated: boolean
    permissions: string[]
    user: {
      email: string
      username: string
    }
  },
  message?: null | string
  error: null | {
    code: string
    msg: string
  }
}
