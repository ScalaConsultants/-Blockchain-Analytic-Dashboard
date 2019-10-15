import { ActionType, Block } from '../../../types';

export const TEZOS_FETCH_TRANSACTIONS = 'TEZOS_FETCH_TRANSACTIONS';
export const TEZOS_FETCH_TRANSACTIONS_STARTED = 'TEZOS_FETCH_TRANSACTIONS_STARTED';
export const TEZOS_FETCH_TRANSACTIONS_SUCCEEDED = 'TEZOS_FETCH_TRANSACTIONS_SUCCEEDED';
export const TEZOS_FETCH_TRANSACTIONS_FAILED = 'TEZOS_FETCH_TRANSACTIONS_FAILED';

export const TEZOS_SET_TRANSACTIONS = 'TEZOS_SET_TRANSACTIONS';

export const tezosFetchTransactions = (): ActionType => ({
  type: TEZOS_FETCH_TRANSACTIONS
});

export const tezosSetTransactions = (transactions: Block[]): any => ({
  type: TEZOS_SET_TRANSACTIONS,
  transactions
});
