import { SetTransactionsAction, FetchTransactionsAction } from './types';
import { Transaction, TransactionsData } from '../../../types';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_STARTED = 'FETCH_TRANSACTIONS_STARTED ';
export const FETCH_TRANSACTIONS_SUCCEEDED = 'FETCH_TRANSACTIONS_SUCCEEDED';
export const FETCH_TRANSACTIONS_FAILED = 'FETCH_TRANSACTIONS_FAILED';

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';

export const FLUSH_TRANSACTIONS = 'FLUSH_TRANSACTIONS';

export const ethereumFetchTransactions = (transactionsData: TransactionsData): FetchTransactionsAction => ({
  type: FETCH_TRANSACTIONS,
  transactionsData
});

export const ethereumSetTransactions = (transactions: Transaction[]): SetTransactionsAction => ({
  type: SET_TRANSACTIONS,
  transactions
});

export const ethereumFlushTransactions = () => ({
  type: FLUSH_TRANSACTIONS
});
