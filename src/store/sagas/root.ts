import { all } from "redux-saga/effects";
import * as blokchainSagas from "./tezos/blokchain";
import * as blokchainIntervalSagas from "./tezos/blokchain-interval";

export default function* root(): any {
  yield all([
    blokchainSagas.watchDoFetchTransactions(),
    blokchainIntervalSagas.watchDoFetchMoreTransactions()
  ]);
}
