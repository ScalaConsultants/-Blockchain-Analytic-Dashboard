import * as ethereumWalletActions from './ethereum/wallets';
import * as tezosWalletActions from './tezos/wallets';


export const getWalletByDatasource = (
    dataSource: string
   ): any => {
    switch (dataSource) {
      case 'TEZOS':
        return tezosWalletActions.TEZOS_FETCH_WALLETS;
      case 'ETHEREUM':
        return ethereumWalletActions.ETHEREUM_FETCH_WALLETS;
      default:
        return ethereumWalletActions.ETHEREUM_FETCH_WALLETS;
    }
   };