import { SetWalletsAction } from '../types';
import { Wallets, ActionType } from '../../../types';

export const TEZOS_FETCH_WALLETS = 'TEZOS_FETCH_WALLETS';
export const TEZOS_FETCH_WALLETS_STARTED = 'TEZOS_FETCH_WALLETS_STARTED';
export const TEZOS_FETCH_WALLETS_SUCCEEDED = 'TEZOS_FETCH_WALLETS_SUCCEEDED';
export const TEZOS_FETCH_WALLETS_FAILED = 'TEZOS_FETCH_WALLETS_FAILED';

export const TEZOS_SET_WALLETS = 'TEZOS_SET_WALLETS';

export const ethereumSetWallets = (wallets: Wallets): SetWalletsAction => ({
  type: TEZOS_SET_WALLETS,
  wallets
});

export const ethereumFetchWallets = (payload: any = {limit: 10, groupBy: 'buyer'}): any => ({
  type: TEZOS_FETCH_WALLETS,
  payload: payload
});
