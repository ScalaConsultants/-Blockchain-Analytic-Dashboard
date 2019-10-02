import { ActionType } from '../../../types';
import { Wallets, setWalletsAction } from './types';

export const ETHEREUM_FETCH_WALLETS = 'ETHEREUM_FETCH_WALLETS';

export const ETHEREUM_SET_WALLETS = 'ETHEREUM_SET_WALLETS';

export const ethereumSetWallets = (wallets: Wallets): setWalletsAction => ({
  type: ETHEREUM_SET_WALLETS,
  wallets
});

export const ethereumFetchWallets = (): ActionType => ({
  type: ETHEREUM_FETCH_WALLETS
});