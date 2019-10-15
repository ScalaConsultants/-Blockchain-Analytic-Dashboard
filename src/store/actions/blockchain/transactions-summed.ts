import { SetTransactionsSummedAction, FetchTransactionsSummedAction } from './types';
import { TransactionSummed, TransactionsSummedData } from '../../../types';

export const FETCH_TRANSACTIONS_SUMMED = 'FETCH_TRANSACTIONS_SUMMED';
export const FETCH_TRANSACTIONS_SUMMED_STARTED = 'FETCH_TRANSACTIONS_SUMMED_STARTED';
export const FETCH_TRANSACTIONS_SUMMED_SUCCEEDED = 'FETCH_TRANSACTIONS_SUMMED_SUCCEEDED';
export const FETCH_TRANSACTIONS_SUMMED_FAILED = 'FETCH_TRANSACTIONS_SUMMED_FAILED';

export const SET_TRANSACTIONS_SUMMED = 'SET_TRANSACTIONS_SUMMED';

export const ethereumFetchTransactionsSummed = (transactionsSummedData: TransactionsSummedData): FetchTransactionsSummedAction => ({
  type: FETCH_TRANSACTIONS_SUMMED,
  transactionsSummedData: transactionsSummedData
});

export const ethereumSetTransactionsSummed = (transactionsSummed: TransactionSummed[]): SetTransactionsSummedAction => ({
  type: SET_TRANSACTIONS_SUMMED,
  transactionsSummed
});
