import { SetTransactionsAction, FetchTransactionsAction } from './types';
import { Transaction, TransactionsData } from '../../../types';

export const ETHEREUM_FETCH_TRANSACTIONS = 'ETHEREUM_FETCH_TRANSACTIONS';
export const ETHEREUM_FETCH_TRANSACTIONS_STARTED = 'ETHEREUM_FETCH_TRANSACTIONS_STARTED ';
export const ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED = 'ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED';
export const ETHEREUM_FETCH_TRANSACTIONS_FAILED = 'ETHEREUM_FETCH_TRANSACTIONS_FAILED';

export const ETHEREUM_SET_TRANSACTIONS = 'ETHEREUM_SET_TRANSACTIONS';

export const ETHEREUM_FLUSH_TRANSACTIONS = 'ETHEREUM_FLUSH_TRANSACTIONS';

export const ethereumFetchTransactions = (transactionsData: TransactionsData): FetchTransactionsAction => ({
  type: ETHEREUM_FETCH_TRANSACTIONS,
  transactionsData
});

export const ethereumSetTransactions = (transactions: Transaction[]): SetTransactionsAction => ({
  type: ETHEREUM_SET_TRANSACTIONS,
  transactions
});

export const ethereumFlushTransactions = () => ({
  type: ETHEREUM_FLUSH_TRANSACTIONS
});
