import { RouteComponentProps } from 'react-router-dom';
import { TransactionsSummed } from '../../types';

export interface State {
    ethereum: TransactionsSummed
}

export type WalletHash = {
    walletHash: string
}

export type WalletSource = {
    walletSource: string
}

export interface LineChartReduxProps extends RouteComponentProps<RouteProps>{
}


interface RouteProps extends WalletHash, WalletSource {}

export interface DetailsViewActions {
    fetchTransactionsSummed: Function
}

export interface LineChartProps extends TransactionsSummed {
    actions:DetailsViewActions,
    params:RouteProps
}
