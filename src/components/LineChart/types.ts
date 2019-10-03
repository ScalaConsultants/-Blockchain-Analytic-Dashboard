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

export interface LineChartProps {

    transactions: Transaction []
}