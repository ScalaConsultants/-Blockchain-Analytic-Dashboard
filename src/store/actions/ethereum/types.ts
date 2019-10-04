import { ActionType, Wallets, Transaction, TransactionSummed } from '../../../types';

export interface SetTransactionsAction extends ActionType {
    transactions: Transaction[]
}

export interface FetchTransactionsAction extends ActionType {
    data: string
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

