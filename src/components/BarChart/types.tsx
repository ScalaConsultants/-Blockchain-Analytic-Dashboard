import { RouteComponentProps } from 'react-router-dom';
import { Wallet, Wallets, StatusRedux } from '../../types';

export interface ViewProps {
  isLoading: boolean;
  containerRef: React.RefObject<any>;
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
  override: Customization
}

export interface State {
  ethereum: Wallets
}

export interface Customization {
  minPercentage?: number,
  restLabel?: boolean,
  increaseSegmentSize?: number,
  activeSegmentZoom?: boolean,
  autoSegmentSize?: boolean,
  shadowSegment?: boolean
}