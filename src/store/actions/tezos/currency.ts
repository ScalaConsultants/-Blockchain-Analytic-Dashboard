export const TEZOS_FETCH_CURRENCY = 'TEZOS_FETCH_CURRENCY';

export const tezosFetchCurrency = (payload: any = { to: 1567382400 }): any => ({
  type: TEZOS_FETCH_CURRENCY,
  payload
});
