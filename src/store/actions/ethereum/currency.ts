export const ETHEREUM_FETCH_CURRENCY = 'ETHEREUM_FETCH_CURRENCY';

export const ethereumFetchCurrency = (payload: any = { to: 1567382400 }): any => ({
  type: ETHEREUM_FETCH_CURRENCY,
  payload
});
