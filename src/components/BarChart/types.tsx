import { RouteComponentProps } from 'react-router-dom';
import { Wallet, Wallets, StatusRedux } from '../../types';
import { NotificationTypes } from '../Notification/types';

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
  fetchTezosWallets: Function
}

export interface WalletHash {
  walletHash: string
}

export interface BarChartProps extends RouteComponentProps<WalletHash> {
  wallets: Wallet[],
  actions: BarChartActions,
  status: StatusRedux
  override: Customization
}

export interface State {
  ethereum: Wallets,
  notifications: NotificationTypes
}

export interface Customization {
  minPercentage?: number,
  restLabel?: boolean,
  increaseSegmentSize?: number,
  activeSegmentZoom?: boolean,
  autoSegmentSize?: boolean,
  shadowSegment?: boolean
}
