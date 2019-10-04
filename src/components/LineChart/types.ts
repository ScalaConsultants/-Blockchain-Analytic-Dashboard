import { RouteComponentProps } from 'react-router-dom';

export interface Transaction {
    interval:string,
    totalValue:number
}

export interface Transactions {
    transactions: Transaction []
}

export interface State {
    ethereum: Transactions
}

export type WalletHash = {
    walletHash: string
}

export interface DetailsViewActions {
    fetchEthereumTransactionsSummed: Function
}

export interface LineChartProps extends Transactions, RouteComponentProps<WalletHash> {
    actions:DetailsViewActions
}