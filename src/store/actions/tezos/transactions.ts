import { SetTransactionsAction, FetchTransactionsAction } from '../types';
import { Transaction, TransactionsData } from '../../../types';

export const TEZOS_FETCH_TRANSACTIONS = 'TEZOS_FETCH_TRANSACTIONS';
export const TEZOS_FETCH_TRANSACTIONS_STARTED = 'TEZOS_FETCH_TRANSACTIONS_STARTED ';
export const TEZOS_FETCH_TRANSACTIONS_SUCCEEDED = 'TEZOS_FETCH_TRANSACTIONS_SUCCEEDED';
export const TEZOS_FETCH_TRANSACTIONS_FAILED = 'TEZOS_FETCH_TRANSACTIONS_FAILED';

export const TEZOS_SET_TRANSACTIONS = 'TEZOS_SET_TRANSACTIONS';

export const TEZOS_FLUSH_TRANSACTIONS = 'TEZOS_FLUSH_TRANSACTIONS';

export const ethereumFetchTransactions = (transactionsData: TransactionsData): FetchTransactionsAction => ({
  type: TEZOS_FETCH_TRANSACTIONS,
  transactionsData
});

export const ethereumSetTransactions = (transactions: Transaction[]): SetTransactionsAction => ({
  type: TEZOS_SET_TRANSACTIONS,
  transactions
});

export const ethereumFlushTransactions = () => ({
  type: TEZOS_FLUSH_TRANSACTIONS
});
