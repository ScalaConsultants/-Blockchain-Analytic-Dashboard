import { all } from 'redux-saga/effects';
import ethereumSagas from './ethereum';
import tezosSagas from './tezos'

export default function* root(): any {
  yield all([
    ethereumSagas.ethereumWatchDoFetchWallets(),
    ethereumSagas.ethereumWatchDoFetchTransactionsSummed(),
    ethereumSagas.ethereumWatchDoFetchTransactions(),
    tezosSagas.tezosWatchDoFetchWallets(),
    tezosSagas.tezosWatchDoFetchTransactionsSummed(),
    tezosSagas.tezosWatchDoFetchTransactions()
  ]);
}
