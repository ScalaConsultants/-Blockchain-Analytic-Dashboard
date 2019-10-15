import { all } from "redux-saga/effects";
import ethereumSagas from "./blockchain";

export default function* root(): any {
  yield all([
    ethereumSagas.watchDoFetchWallets(),
    ethereumSagas.watchDoFetchTransactionsSummed(),
    ethereumSagas.watchDoFetchTransactions()
  ]);
}
