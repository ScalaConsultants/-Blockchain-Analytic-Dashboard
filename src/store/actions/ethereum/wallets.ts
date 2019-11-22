import { SetWalletsAction } from '../types';
import { Wallets } from '../../../types';

export const ETHEREUM_FETCH_WALLETS = 'ETHEREUM_FETCH_WALLETS';
export const ETHEREUM_FETCH_WALLETS_STARTED = 'ETHEREUM_FETCH_WALLETS_STARTED';
export const ETHEREUM_FETCH_WALLETS_SUCCEEDED = 'FETHEREUM_ETCH_WALLETS_SUCCEEDED';
export const ETHEREUM_FETCH_WALLETS_FAILED = 'ETHEREUM_FETCH_WALLETS_FAILED';

export const ETHEREUM_SET_WALLETS = 'ETHEREUM_SET_WALLETS';

export const ethereumSetWallets = (wallets: Wallets): SetWalletsAction => ({
  type: ETHEREUM_SET_WALLETS,
  wallets
});

export const ethereumFetchWallets = (payload: any = {limit: 10, groupBy: 'buyer'}): any => ({
  type: ETHEREUM_FETCH_WALLETS,
  payload: payload
});

