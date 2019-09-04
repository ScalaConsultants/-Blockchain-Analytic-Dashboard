import { ActionType } from "../../../types";

export const ETHEREUM_FETCH_MORE_TRANSACTIONS =
  "ETHEREUM_FETCH_MORE_TRANSACTIONS";

export const ethereumFetchMoreTransactions = (): ActionType => ({
  type: ETHEREUM_FETCH_MORE_TRANSACTIONS
});
