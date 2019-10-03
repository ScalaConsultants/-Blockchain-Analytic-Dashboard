import { ActionType, Wallets, Transaction } from '../../../types';

export interface SetTransactionsAction extends ActionType {
    transactions: Transaction[]
}

export interface FetchTransactionsAction extends ActionType {
    data: string
}

export interface SetWalletsAction extends ActionType {
    wallets: Wallets
}

