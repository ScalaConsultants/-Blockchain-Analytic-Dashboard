import { SetTransactionsSummedAction, FetchTransactionsSummedAction } from '../types';
import { TransactionSummed, TransactionsSummedData } from '../../../types';

export const TEZOS_FETCH_TRANSACTIONS_SUMMED = 'TEZOS_FETCH_TRANSACTIONS_SUMMED';
export const TEZOS_FETCH_TRANSACTIONS_SUMMED_STARTED = 'TEZOS_FETCH_TRANSACTIONS_SUMMED_STARTED';
export const TEZOS_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED = 'TEZOS_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED';
export const TEZOS_FETCH_TRANSACTIONS_SUMMED_FAILED = 'TEZOS_FETCH_TRANSACTIONS_SUMMED_FAILED';

export const TEZOS_SET_TRANSACTIONS_SUMMED = 'TEZOS_SET_TRANSACTIONS_SUMMED';

export const ethereumFetchTransactionsSummed = (transactionsSummedData: TransactionsSummedData): FetchTransactionsSummedAction => ({
  type: TEZOS_FETCH_TRANSACTIONS_SUMMED,
  transactionsSummedData: transactionsSummedData
});

export const ethereumSetTransactionsSummed = (transactionsSummed: TransactionSummed[]): SetTransactionsSummedAction => ({
  type: TEZOS_SET_TRANSACTIONS_SUMMED,
  transactionsSummed
});
