import {
  ActionType,
  Wallets,
  Transaction,
  TransactionSummed,
  TransactionsData,
  TransactionsSummedData
} from '../../types';

export interface SetTransactionsAction extends ActionType {
  transactions: Transaction[];
}

export interface FetchTransactionsAction extends ActionType {
  transactionsData: TransactionsData;
}

export interface SetWalletsAction extends ActionType {
  wallets: Wallets;
}

export interface SetTransactionsSummedAction extends ActionType {
  transactionsSummed: TransactionSummed[];
}

export interface FetchTransactionsSummedAction extends ActionType {
  transactionsSummedData: TransactionsSummedData;
}

export interface AuthUserData {
  email: string;
  password?: string;
  shouldSignUp?: boolean;
  username?: string;
}

export interface AuthUser extends ActionType {
  data: AuthUserData;
}

export interface AuthUserResetPassword {
  id: string,
  token: string
}