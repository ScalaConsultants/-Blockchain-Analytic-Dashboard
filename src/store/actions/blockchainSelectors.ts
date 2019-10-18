import * as ethereumWalletActions from './ethereum/wallets';
import * as tezosWalletActions from './tezos/wallets';

import * as ethereumTransactionsSummedActions from './ethereum/transactions-summed';
import * as tezosTransactionsSummedActions from './tezos/transactions-summed';


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

   export const fetchTransactionsSummedByBlockchain = (
    dataSource: string
   ): any => {
    switch (dataSource) {
      case Blockchains.ETH:
        return ethereumTransactionsSummedActions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED;
      case Blockchains.XTZ:
        return tezosTransactionsSummedActions.TEZOS_FETCH_TRANSACTIONS_SUMMED;
      default:
        return ethereumTransactionsSummedActions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED;
    }
   };