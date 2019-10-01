import { put, call, takeEvery } from "redux-saga/effects";
import {
  ConseilDataClient,
  ConseilOperator,
  ConseilQueryBuilder,
  ConseilSortDirection
} from "conseiljs";

import apiConfig from "./api-config";
import * as blokchainActions from "../../actions/tezos/blokchain";
import * as loaderActions from "../../actions/loader";

const initialFetchAmount = 40000;

const fetchTransactionsRequest = async (): Promise<any> => {
  console.log("fetching from Conseil API");

  let transactionQuery = ConseilQueryBuilder.blankQuery();
  transactionQuery = ConseilQueryBuilder.addFields(
    transactionQuery,
    "block_level",
    "timestamp",
    "source",
    "destination",
    "amount",
    "fee",
    "counter"
  );
  transactionQuery = ConseilQueryBuilder.addPredicate(
    transactionQuery,
    "kind",
    ConseilOperator.EQ,
    ["transaction"],
    false
  );
  transactionQuery = ConseilQueryBuilder.addPredicate(
    transactionQuery,
    "status",
    ConseilOperator.EQ,
    ["applied"],
    false
  );
  transactionQuery = ConseilQueryBuilder.addOrdering(
    transactionQuery,
    "block_level",
    ConseilSortDirection.DESC
  );
  transactionQuery = ConseilQueryBuilder.setLimit(
    transactionQuery,
    initialFetchAmount
  );

  const result = await ConseilDataClient.executeEntityQuery(
    apiConfig.conseilServerInfo,
    apiConfig.platform,
    apiConfig.network,
    apiConfig.entity,
    transactionQuery
  );
  const transactions = result.sort(
    (a: any, b: any): number => a.timestamp - b.timestamp
  );

  return transactions;
};

export function* doFetchTransactions(): any {
  // yield put(loaderActions.showLoader());
  const response = yield call(fetchTransactionsRequest);
  yield put(loaderActions.hideLoader());
  if (response) yield put(blokchainActions.BlokchainSetTransactions(response));
  else {
    yield put(blokchainActions.BlokchainSetTransactions([]));
  }
}

export function* watchDoFetchTransactions(): any {
  yield takeEvery(
    blokchainActions.BLOKCHAIN_FETCH_TRANSACTIONS,
    doFetchTransactions
  );
}
