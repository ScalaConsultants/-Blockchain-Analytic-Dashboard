import { all } from "redux-saga/effects";
import * as blokchainSagas from "./tezos/blokchain";
import * as blokchainIntervalSagas from "./tezos/blokchain-interval";
import * as ethereumSagas from "./ethereum/wallets";

export default function* root(): any {
  yield all([
    ethereumSagas.watchDoFetchWallets()
  ]);
}
