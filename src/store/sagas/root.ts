import { all } from "redux-saga/effects";
import ethereumSagas from "./ethereum";

export default function* root(): any {
  yield all([
    ethereumSagas.watchDoFetchWallets(),
    ethereumSagas.watchDoFetchTransactions()
  ]);
}
