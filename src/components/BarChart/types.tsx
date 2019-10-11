import { RouteComponentProps } from 'react-router-dom';
import { Wallet, Wallets } from '../../types';

export interface ViewProps {
  data: React.ReactElement<'div'>[],
  containerRef: React.RefObject<any>
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
  actions: BarChartActions,
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