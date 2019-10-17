import { all } from 'redux-saga/effects';
import ethereumSagas from './ethereum';
import tezosSagas from './tezos'

export default function* root(): any {
  yield all([
    ethereumSagas.watchDoFetchWallets(),
    ethereumSagas.watchDoFetchTransactionsSummed(),
    ethereumSagas.watchDoFetchTransactions(),
    tezosSagas.watchDoFetchWallets(),
    tezosSagas.watchDoFetchTransactionsSummed(),
    tezosSagas.watchDoFetchTransactions()
  ]);
}
