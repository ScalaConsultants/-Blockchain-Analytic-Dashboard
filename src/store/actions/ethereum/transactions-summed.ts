import { SetTransactionsSummedAction, FetchTransactionsSummedAction } from './types';
import { TransactionSummed, TransactionsSummedData } from '../../../types';

export const ETHEREUM_FETCH_TRANSACTIONS_SUMMED = 'ETHEREUM_FETCH_TRANSACTIONS_SUMMED';
export const ETHEREUM_FETCH_TRANSACTIONS_SUMMED_STARTED = 'ETHEREUM_FETCH_TRANSACTIONS_SUMMED_STARTED';
export const ETHEREUM_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED = 'ETHEREUM_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED';
export const ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED = 'ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED';

export const ETHEREUM_SET_TRANSACTIONS_SUMMED = 'ETHEREUM_SET_TRANSACTIONS_SUMMED';

export const ethereumFetchTransactionsSummed = (transactionsSummedData: TransactionsSummedData): FetchTransactionsSummedAction => ({
  type: ETHEREUM_FETCH_TRANSACTIONS_SUMMED,
  transactionsSummedData: transactionsSummedData
});

export const ethereumSetTransactionsSummed = (transactionsSummed: TransactionSummed[]): SetTransactionsSummedAction => ({
  type: ETHEREUM_SET_TRANSACTIONS_SUMMED,
  transactionsSummed
});
