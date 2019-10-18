import * as ethereumWalletActions from './ethereum/wallets';
import * as tezosWalletActions from './tezos/wallets';

import { Blockchains } from '../../types';

export const getWalletByDatasource = (
    dataSource: string
   ): any => {
    switch (dataSource) {
      case Blockchains.TZX:
        return tezosWalletActions.TEZOS_FETCH_WALLETS;
      case Blockchains.ETH:
        return ethereumWalletActions.ETHEREUM_FETCH_WALLETS;
      default:
        return ethereumWalletActions.ETHEREUM_FETCH_WALLETS;
    }
   };