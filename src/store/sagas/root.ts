import { all } from "redux-saga/effects";
import * as blokchainSagas from "./tezos/blokchain";
import * as blokchainIntervalSagas from "./tezos/blokchain-interval";
import * as ethereumSagas from "./ethereum/transactions";

export default function* root(): any {
  yield all([
    // blokchainSagas.watchDoFetchTransactions(),
    ethereumSagas.watchDoFetchTransactions()
  ]);
}
