import { FetchTransactionsAction, ActionType, Block } from "../../../types";

export const TEZOS_FETCH_TRANSACTIONS = "TEZOS_FETCH_TRANSACTIONS";
export const TEZOS_SET_TRANSACTIONS = "TEZOS_SET_TRANSACTIONS";

export const tezosFetchTransactions = (): ActionType => ({
    type: TEZOS_FETCH_TRANSACTIONS
});

export const tezosSetTransactions = (
    transactions: Block[]
): FetchTransactionsAction => ({
    type: TEZOS_SET_TRANSACTIONS,
    transactions: transactions
});