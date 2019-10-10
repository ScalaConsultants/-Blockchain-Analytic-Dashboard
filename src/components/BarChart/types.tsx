import { RouteComponentProps } from 'react-router-dom';
import { Wallet, Wallets, StatusRedux } from '../../types';

export interface ViewProps {
  isLoading: boolean;
  data: React.ReactElement<'div'>[];
}

export interface Accumulator {
  position: number,
  elements: React.ReactElement<'div'>[]
}

export interface BarChartActions {
  fetchEthereumWallets: Function,
}

export interface WalletHash {
  walletHash: string
}

export interface BarChartProps extends RouteComponentProps<WalletHash> {
  wallets: Wallet[],
  width: number,
  actions: BarChartActions,
  status: StatusRedux
}

export interface State {
  ethereum: Wallets
}
