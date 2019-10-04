import { Block, Transactions } from "../../types";
import { RouteComponentProps } from 'react-router-dom';

export interface HeaderColsInterface {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
}

export interface ModalDetailsProps {
    open: boolean;
    handleClose: () => void;
    data: Block | {};
}

export interface State {
    ethereum: Transactions
}

export type WalletHash = {
    walletHash: string
}

export interface TransactionsListActions {
    fetchEthereumTransactions: Function
}

export interface TransactionsListProps extends Transactions, RouteComponentProps<WalletHash> {
    actions:TransactionsListActions
}