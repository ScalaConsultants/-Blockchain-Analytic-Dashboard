import { SetWalletsAction } from './types';
import { Wallets, ActionType } from '../../../types';

export const FETCH_WALLETS = 'FETCH_WALLETS';
export const FETCH_WALLETS_STARTED = 'FETCH_WALLETS_STARTED';
export const FETCH_WALLETS_SUCCEEDED = 'FETCH_WALLETS_SUCCEEDED';
export const FETCH_WALLETS_FAILED = 'FETCH_WALLETS_FAILED';

export const SET_WALLETS = 'SET_WALLETS';

export const ethereumSetWallets = (wallets: Wallets): SetWalletsAction => ({
  type: SET_WALLETS,
  wallets
});

export const ethereumFetchWallets = (payload: any = {limit: 10, groupBy: 'buyer'}): any => ({
  type: FETCH_WALLETS,
  payload: payload
});
