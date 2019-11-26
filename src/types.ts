import { Theme } from '@material-ui/core/styles';

export interface EventTarget {
  target: {
    value: string;
  };
}

export interface DatePickerProps {
  label: string;
  date: Date | null;
  handleDateChange: (date: Date | null) => void;
}

export interface ActionType {
  type: string;
}

export interface State {
  loader: number
}

export interface Wallet {
  walletHash: string,
  totalValue: number,
  percentage: number,
  type?: string
}

export interface Wallets {
  wallets: Wallet[],
  status: StatusRedux
}

export interface Transaction {
  hash: string,
  from: string,
  to: string,
  timestamp: number,
  value: number,
  gas: number,
  gasPrice: number
}

export interface Transactions {
  description?: string,
  status: StatusRedux,
  transactions: Transaction []
}

export interface TransactionSummed {
  interval: string,
  totalValue: number
}

export interface TransactionsSummed {
  status: StatusRedux,
  transactionsSummed: TransactionSummed []
}

export interface StatusRedux {
  transactionsIsFetching: boolean,
  transactionsSummedIsFetching: boolean,
  walletsIsFetching: boolean
}

export interface Block {
  source: string;
  timestamp: number;
  /* eslint-disable-next-line camelcase */
  block_level: number;
  amount: number;
  counter: number;
  destination: string;
  fee: number;
}

export interface TransactionsData {
  page:number,
  walletHash: string,
  resultsPerPage?:number,
  dataSource?: any,
}

export interface TransactionsSummedData {
  walletHash: string,
  groupBy: string
}

export interface ExtendedTheme extends Theme {
  constants: {
    PRIMARY_MAIN_COLOR: string,
    MARKET_COLOR: string,
    PRIVATE_COLOR: string,
    DAPP_COLOR: string,
    FRAUD_COLOR: string,
    REST_COLOR: string,
    DEFAULT_FONT_FAMILY: string,
    DEFAULT_FONT_STYLE: string,
    DEFAULT_FONT_WEIGHT: any,
    DEFAULT_FONT_SIZE: string,
    DEFAULT_LINE_HEIGHT: string,
    SECONDARY_BG_COLOR: string,
    DECOR_COLOR: string,
    GREY_TEXT_COLOR: string
  }
}

export enum Blockchains {
  ETH = 'ETH',
  XTZ = 'XTZ'
}

export enum WalletType {
  PUBLIC = 'public',
  PRIVATE = 'private'
}

export enum Markets {
  MARKET = 'Market',
  DAPP = 'DAPP',
  FRAUD = 'Fraud',
  PRIVATE = 'Private',
  UNASSIGNED = 'Unassigned'
}
