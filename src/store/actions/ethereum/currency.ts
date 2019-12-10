export const ETHEREUM_FETCH_CURRENCY = 'ETHEREUM_FETCH_CURRENCY';
export const ETHEREUM_FETCH_CURRENCY_STARTED = 'ETHEREUM_FETCH_CURRENCY_STARTED';
export const ETHEREUM_FETCH_CURRENCY_SUCCEEDED = 'ETHEREUM_FETCH_CURRENCY_SUCCEEDED';
export const ETHEREUM_FETCH_CURRENCY_FAILED = 'ETHEREUM_FETCH_CURRENCY_FAILED';

export const ETHEREUM_SET_CURRENCY = 'ETHEREUM_SET_CURRENCY';

export const ethereumSetCurrency = (currency: any): any => ({
  type: ETHEREUM_SET_CURRENCY,
  currency
});

export const ethereumFetchCurrency = (payload: any = {to: 1575971788507}): any => ({
  type: ETHEREUM_FETCH_CURRENCY,
  payload: payload
});
