import {ActionType} from '../../../types';

export const ETHEREUM_FETCH_TRANSACTIONS = 'ETHEREUM_FETCH_TRANSACTIONS';
export const ETHEREUM_SET_TRANSACTIONS = 'ETHEREUM_SET_TRANSACTIONS';
export const ETHEREUM_SUM_TRANSACTIONS = 'ETHEREUM_SUM_TRANSACTIONS';

export const ethereumFetchTransactions = (): ActionType => ({
  type: ETHEREUM_FETCH_TRANSACTIONS
});

export const ethereumSetTransactions = (blocks: any): any => ({
  type: ETHEREUM_SET_TRANSACTIONS,
  blocks
});
