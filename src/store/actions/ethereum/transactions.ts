import { SetTransactionsAction, FetchTransactionsAction } from './types';
import { Transaction, TransactionsData } from '../../../types';

export const ETHEREUM_FETCH_TRANSACTIONS = 'ETHEREUM_FETCH_TRANSACTIONS';

export const ETHEREUM_SET_TRANSACTIONS = 'ETHEREUM_SET_TRANSACTIONS';

export const ethereumFetchTransactions = (transactionsData: TransactionsData): FetchTransactionsAction => ({
  type: ETHEREUM_FETCH_TRANSACTIONS,
  transactionsData: transactionsData
});

export const ethereumSetTransactions = (transactions: Transaction[]): SetTransactionsAction => ({
  type: ETHEREUM_SET_TRANSACTIONS,
  transactions
});
