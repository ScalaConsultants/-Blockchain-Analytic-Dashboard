import { RouteComponentProps } from 'react-router-dom';

export interface DetailsViewActions {
    fetchEthereumTransactions: Function
}

export type WalletHash = {
    wallet_hash: string
}

export interface DetailsViewProps {
    routeProps: RouteComponentProps<WalletHash>,
    actions: DetailsViewActions
}