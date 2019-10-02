import { FetchTransactionsAction, ActionType, Block } from "../../../types";

export const BLOKCHAIN_FETCH_TRANSACTIONS = "BLOKCHAIN_FETCH_TRANSACTIONS";
export const BLOKCHAIN_SET_TRANSACTIONS = "BLOKCHAIN_SET_TRANSACTIONS";

export const tezosFetchTransactions = (): ActionType => ({
    type: BLOKCHAIN_FETCH_TRANSACTIONS
});

export const tezosSetTransactions = (
    transactions: Block[]
): FetchTransactionsAction => ({
    type: BLOKCHAIN_SET_TRANSACTIONS,
    transactions: transactions
});