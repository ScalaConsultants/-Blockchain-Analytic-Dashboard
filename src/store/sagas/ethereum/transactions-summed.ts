import { put, takeEvery } from 'redux-saga/effects';

import { doGet } from '../../helpers/fetch';
import { FetchTransactionsSummedAction } from '../../actions/types';
import { TransactionsSummed } from '../../../types';
import * as ethereumActions from '../../actions/ethereum/transactions-summed';

async function fetchTransactionsSummed(walletHash:string, groupBy:string): Promise<TransactionsSummed> {
  const url = `api/v1/ethereum/wallets/linechart?groupBy=${groupBy}&&limit=100&walletHash=${walletHash}`;
  
  const response = await doGet(url);
  
  return response.json();
}

function* doFetchTransactionsSummed(action:FetchTransactionsSummedAction) {
  const {transactionsSummedData} = action;
  const {
    ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED,
    ETHEREUM_FETCH_TRANSACTIONS_SUMMED_STARTED,
    ETHEREUM_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED,
    ETHEREUM_SET_TRANSACTIONS_SUMMED
  } = ethereumActions;

  yield put({ type: ETHEREUM_FETCH_TRANSACTIONS_SUMMED_STARTED }); 

  const transactionsSummed = yield fetchTransactionsSummed(transactionsSummedData.walletHash, transactionsSummedData.groupBy);

  try {
    if (transactionsSummed.length > 0) {
      yield put({
        type: ETHEREUM_SET_TRANSACTIONS_SUMMED,
        transactionsSummed
      });
    }
    yield put({ type: ETHEREUM_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED });

  } catch (error) {
    yield put({type: ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED, code: error.code});
  }
}

export function* watchDoFetchTransactionsSummed() {
  yield takeEvery(
    ethereumActions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED,
    doFetchTransactionsSummed
  );
}
