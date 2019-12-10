import { all } from 'redux-saga/effects';
import ethereumSagas from './ethereum';
import tezosSagas from './tezos'
import watchAuth from './auth';
import watchCommon from './common';

export default function* root(): any {
  yield all([
    watchAuth(),
    watchCommon(),
    ethereumSagas.watchDoFetchWallets(),
    ethereumSagas.watchDoFetchTransactionsSummed(),
    ethereumSagas.watchDoFetchTransactions(),
    ethereumSagas.watchDoFetchCurrency(),
    tezosSagas.watchDoFetchWallets(),
    tezosSagas.watchDoFetchTransactionsSummed(),
    tezosSagas.watchDoFetchTransactions(),
    tezosSagas.watchDoFetchCurrency()
  ]);
}
