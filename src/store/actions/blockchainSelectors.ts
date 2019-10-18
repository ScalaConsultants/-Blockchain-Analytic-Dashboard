import * as ethereumWalletActions from './ethereum/wallets';
import * as tezosWalletActions from './tezos/wallets';
import * as ethereumTransactionsActions from './ethereum/transactions';
import * as tezosTransactionsActions from './tezos/transactions';

import { Blockchains } from '../../types';

export const getWalletByDatasource = (
    dataSource: string
   ): any => {
    switch (dataSource) {
      case Blockchains.XTZ:
        return tezosWalletActions.TEZOS_FETCH_WALLETS;
      case Blockchains.ETH:
        return ethereumWalletActions.ETHEREUM_FETCH_WALLETS;
      default:
        return ethereumWalletActions.ETHEREUM_FETCH_WALLETS;
    }
   };

   export const fetchTransactionsByDatasource = (
    dataSource: string
   ): any => {
    switch (dataSource) {
      case Blockchains.XTZ:
        return tezosTransactionsActions.TEZOS_FETCH_TRANSACTIONS;
      case Blockchains.ETH:
        return ethereumTransactionsActions.ETHEREUM_FETCH_TRANSACTIONS;
      default:
        return ethereumTransactionsActions.ETHEREUM_FETCH_TRANSACTIONS;
    }
   };
   export const flushTransactionstByDatasource = (
    dataSource: string
   ): any => {
    switch (dataSource) {
      case Blockchains.XTZ:
        return tezosTransactionsActions.TEZOS_FLUSH_TRANSACTIONS;
      case Blockchains.ETH:
        return ethereumTransactionsActions.ETHEREUM_FLUSH_TRANSACTIONS;
      default:
        return ethereumTransactionsActions.ETHEREUM_FLUSH_TRANSACTIONS;
    }
   };
   