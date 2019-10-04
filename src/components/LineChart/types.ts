import { RouteComponentProps } from 'react-router-dom';
import { TransactionsSummed }  from '../../types';

export interface State {
    ethereum: TransactionsSummed
}

export type WalletHash = {
    walletHash: string
}

export interface DetailsViewActions {
    fetchEthereumTransactionsSummed: Function
}

export interface LineChartProps extends TransactionsSummed, RouteComponentProps<WalletHash> {
    actions:DetailsViewActions
}