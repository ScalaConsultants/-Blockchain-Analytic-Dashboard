export const TEZOS_FETCH_CURRENCY = 'TEZOS_FETCH_CURRENCY';
export const TEZOS_FETCH_CURRENCY_STARTED = 'TEZOS_FETCH_CURRENCY_STARTED';
export const TEZOS_FETCH_CURRENCY_SUCCEEDED = 'TEZOS_FETCH_CURRENCY_SUCCEEDED';
export const TEZOS_FETCH_CURRENCY_FAILED = 'TEZOS_FETCH_CURRENCY_FAILED';

export const TEZOS_SET_CURRENCY = 'TEZOS_SET_CURRENCY';

export const tezosSetCurrency = (currency: any): any => ({
  type: TEZOS_SET_CURRENCY,
  currency
});

export const tezosFetchCurrency = (payload: any = {to: 1567382400}): any => ({
  type: TEZOS_FETCH_CURRENCY,
  payload: payload
});
