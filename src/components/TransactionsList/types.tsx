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
  walletSource: string;
}

export interface TransactionsListActions {
  fetchTransactions: Function;
  flushTransactions: Function;
}

export type WalletSource = {
  walletSource: string
}

interface RouteProps extends WalletHash, WalletSource {}

export interface TransactionsListProps extends Transactions, RouteComponentProps<WalletHash> {
  actions: TransactionsListActions;
  description: string;
  page: number;
  params:RouteProps;
}

export interface TransactionsListPropsRedux{
  match: any;
  description?: any
}
