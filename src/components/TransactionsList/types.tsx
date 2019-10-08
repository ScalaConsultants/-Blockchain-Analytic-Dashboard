import { RouteComponentProps } from 'react-router-dom';
import { Transactions } from '../../types';

export interface HeaderColsInterface {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}

export interface State {
  ethereum: Transactions;
}

export interface WalletHash {
  walletHash: string;
}

export interface TransactionsListActions {
  fetchEthereumTransactions: Function;
  flushEthereumTransactions: Function;
}

export interface TransactionsListProps extends Transactions, RouteComponentProps<WalletHash> {
  actions: TransactionsListActions;
  description: string;
}

export interface TransactionsListPropsRedux {
  description: string;
}
