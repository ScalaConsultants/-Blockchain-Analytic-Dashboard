import { all } from "redux-saga/effects";
import * as ethereumSagas from "./ethereum/wallets";

export default function* root(): any {
  yield all([
    ethereumSagas.watchDoFetchWallets()
  ]);
}
