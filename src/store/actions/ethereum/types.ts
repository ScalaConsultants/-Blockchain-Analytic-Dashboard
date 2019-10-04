import { ActionType, Wallets, Transaction, TransactionSummed, TransactionsData } from '../../../types';

export interface SetTransactionsAction extends ActionType {
    transactions: Transaction[]
}

export interface FetchTransactionsAction extends ActionType {
    transactionsData: TransactionsData
}

export interface SetWalletsAction extends ActionType {
    wallets: Wallets
}

export interface SetTransactionsSummedAction extends ActionType {
    transactionsSummed: TransactionSummed[]
}

export interface FetchTransactionsSummedAction extends ActionType {
    data: string
}

