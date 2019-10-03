import {Block} from "../../types";

export interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPage: number) => void;
}

export interface HeaderColsInterface {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
}

export type Order = 'asc' | 'desc';
export type OrderBy = string;

export interface ModalDetailsProps {
    open: boolean;
    handleClose: () => void;
    data: Block | {};
}

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

export interface TransactionsListActions {
    fetchEthereumTransactions: Function
}

export interface TransactionsListProps extends Transactions {
    actions: TransactionsListActions
}