import * as ethereumWalletActions from './ethereum/wallets';
import * as tezosWalletActions from './tezos/wallets';
import * as ethereumTransactionsActions from './ethereum/transactions';
import * as tezosTransactionsActions from './tezos/transactions';
import * as ethereumTransactionsSummedActions from './ethereum/transactions-summed';
import * as tezosTransactionsSummedActions from './tezos/transactions-summed';
import * as tezosCurrencyActions from './tezos/currency';
import * as ethereumCurrencyActions from './ethereum/currency';

import { Blockchains } from '../../types';

export const getWalletByDatasource = (dataSource: string): any => {
    switch (dataSource) {
      case Blockchains.XTZ:
        return tezosWalletActions.TEZOS_FETCH_WALLETS;
      case Blockchains.ETH:
        return ethereumWalletActions.ETHEREUM_FETCH_WALLETS;
      default:
        return ethereumWalletActions.ETHEREUM_FETCH_WALLETS;
    }
   };

   export const fetchTransactionsSummedByBlockchain = (dataSource: string): any => {
    switch (dataSource) {
      case Blockchains.ETH:
        return ethereumTransactionsSummedActions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED;
      case Blockchains.XTZ:
        return tezosTransactionsSummedActions.TEZOS_FETCH_TRANSACTIONS_SUMMED;
      default:
        return ethereumTransactionsSummedActions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED;
    }
   };

   export const fetchTransactionsByDatasource = (dataSource: string): any => {
    switch (dataSource) {
      case Blockchains.XTZ:
        return tezosTransactionsActions.TEZOS_FETCH_TRANSACTIONS;
      case Blockchains.ETH:
        return ethereumTransactionsActions.ETHEREUM_FETCH_TRANSACTIONS;
      default:
        return ethereumTransactionsActions.ETHEREUM_FETCH_TRANSACTIONS;
    }
   };

   export const flushTransactionstByDatasource = (dataSource: string): any => {
    switch (dataSource) {
      case Blockchains.XTZ:
        return tezosTransactionsActions.TEZOS_FLUSH_TRANSACTIONS;
      case Blockchains.ETH:
        return ethereumTransactionsActions.ETHEREUM_FLUSH_TRANSACTIONS;
      default:
        return ethereumTransactionsActions.ETHEREUM_FLUSH_TRANSACTIONS;
    }
   };

   export const fetchCurrencyByDatasource = (dataSource: string): any => {
    switch (dataSource) {
      case Blockchains.XTZ:
        return tezosCurrencyActions.TEZOS_FETCH_CURRENCY;
      case Blockchains.ETH:
        return ethereumCurrencyActions.ETHEREUM_FETCH_CURRENCY;
      default:
        return ethereumCurrencyActions.ETHEREUM_FETCH_CURRENCY;
    }
   };
