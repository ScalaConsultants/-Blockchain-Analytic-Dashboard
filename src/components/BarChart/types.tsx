import { RouteComponentProps } from 'react-router-dom';
import { Wallet, Wallets, StatusRedux } from '../../types';
import { NotificationTypes } from '../Notification/types';

export interface ViewProps {
  isLoading: boolean;
  containerRef: React.RefObject<any>;
  data: React.ReactElement<'div'>[];
}

export interface Accumulator {
  total: number,
  elements: React.ReactElement<'div'>[]
}

export interface BarChartActions {
  fetchWalletsByBlockchain: Function,
}

export interface WalletHash {
  walletHash: string,
  walletSource: string,
  groupBy: string,
  blockchains: string, 
  limit: string, 
  from: string, 
  to: string
}

export interface BarChartProps {
  wallets: Wallet[],
  actions: BarChartActions,
  status: StatusRedux,
  override: Customization,
}

export interface State {
  ethereum: Wallets,
  notifications: NotificationTypes
}

export interface Customization extends RouteComponentProps<WalletHash> {
  walletSource?: string,
  minPercentage?: number,
  restLabel?: boolean,
  increaseSegmentSize?: number,
  activeSegmentZoom?: boolean,
  autoSegmentSize?: boolean,
  shadowSegment?: boolean
}
