import { SetTransactionsSummedAction, FetchTransactionsSummedAction } from './types';
import { TransactionSummed } from '../../../types';

export const ETHEREUM_FETCH_TRANSACTIONS_SUMMED = 'ETHEREUM_FETCH_TRANSACTIONS_SUMMED';

export const ETHEREUM_SET_TRANSACTIONS_SUMMED = 'ETHEREUM_SET_TRANSACTIONS_SUMMED';

export const ethereumFetchTransactionsSummed = (data: string): FetchTransactionsSummedAction => ({
  type: ETHEREUM_FETCH_TRANSACTIONS_SUMMED,
  data: data
});

export const ethereumSetTransactionsSummed = (transactionsSummed: TransactionSummed[]): SetTransactionsSummedAction => ({
  type: ETHEREUM_SET_TRANSACTIONS_SUMMED,
  transactionsSummed
});
