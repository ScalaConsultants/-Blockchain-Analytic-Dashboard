import { put, takeEvery, select } from "redux-saga/effects";

import * as ethereumActions from "../../actions/ethereum/transactions";
import * as ethereumPageActions from "../../actions/ethereum/page";
import * as loaderActions from "../../actions/loader";

export const getPage = (state: any): number => state.ethereum.page;

async function fetchTransactions(page: number): Promise<any> {
  const res = await fetch(`/api/transactions?page=${page}`);
  return res.json();
}

function* doFetchTransactions(): any {
  const page = yield select(getPage);
  const showLoader = page === 1 ? true : false;

  // Show loader on initial fetch
  if (showLoader) {
    yield put(loaderActions.showLoader());
  }

  const transactions = yield fetchTransactions(page);

  if (transactions.length > 0) {
    yield put({
      type: ethereumActions.ETHEREUM_SET_TRANSACTIONS,
      transactions
    });

    yield put({
      type: ethereumPageActions.ETHEREUM_FETCH_MORE_TRANSACTIONS
    });
  }

  // Hide on consecutive requests
  if (showLoader) {
    yield put(loaderActions.hideLoader());
  }
}

export function* watchDoFetchTransactions(): any {
  yield takeEvery(
    ethereumActions.ETHEREUM_FETCH_TRANSACTIONS,
    doFetchTransactions
  );

  yield takeEvery(
    ethereumPageActions.ETHEREUM_FETCH_MORE_TRANSACTIONS,
    doFetchTransactions
  );
}
