
export const ETHEREUM_FETCH_TRANSACTIONS = 'ETHEREUM_FETCH_TRANSACTIONS';

export const ETHEREUM_SET_TRANSACTIONS = 'ETHEREUM_SET_TRANSACTIONS';

export const ethereumFetchTransactions = (data:any): any => ({
  type: ETHEREUM_FETCH_TRANSACTIONS,
  data: data
});

export const ethereumSetTransactions = (transactions: any): any => ({
  type: ETHEREUM_SET_TRANSACTIONS,
  transactions
});
