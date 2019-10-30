import {ActionType, Wallet} from '../../types';

export interface SetWalletsActionReducer {
  type: string;
  wallets: Wallet[];
}

export interface AuthState {
  token: null | string,
  email: null | string,
  username: null | string,
  isAuth: boolean,
  loading: boolean,
  error: null | {
    code?: string,
    msg?: string
  }
}

export interface AuthUserResponse extends ActionType {
  data: {
    token: null | string,
    isAuthenticated: boolean
    user: {
      email: string;
      username: string;
    }
  },
  error: null | {
    code: string,
    msg: string
  }
}
