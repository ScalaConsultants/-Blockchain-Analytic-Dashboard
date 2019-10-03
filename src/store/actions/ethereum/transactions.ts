import { SetTransactionsAction, FetchTransactionsAction } from './types';
import { Transaction } from '../../../types';

export const ETHEREUM_FETCH_TRANSACTIONS = 'ETHEREUM_FETCH_TRANSACTIONS';

export const ETHEREUM_SET_TRANSACTIONS = 'ETHEREUM_SET_TRANSACTIONS';

export const ethereumFetchTransactions = (data: string): FetchTransactionsAction => ({
  type: ETHEREUM_FETCH_TRANSACTIONS,
  data: data
});

export const ethereumSetTransactions = (transactions: Transaction[]): SetTransactionsAction => ({
  type: ETHEREUM_SET_TRANSACTIONS,
  transactions
});
