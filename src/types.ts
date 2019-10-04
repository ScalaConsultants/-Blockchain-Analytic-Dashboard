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
  percentage: number
}

export interface Wallets {
  wallets: Wallet[]
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
  transactions: Transaction []
}

export interface TransactionSummed {
  interval: string,
  totalValue: number
}

export interface TransactionsSummed {
  transactionsSummed: TransactionSummed []
}

export interface Block {
  source: string;
  timestamp: number;
  block_level: number;
  amount: number;
  counter: number;
  destination: string;
  fee: number;
}

export interface TransactionsData {
  page:number,
  walletHash: string,
  resultsPerPage?:number
}

export interface TransactionsSummedData {
  walletHash: string,
}

export interface ExtendedTheme extends Theme {
  constants: {
    MARKET_COLOR: string,
    PRIVATE_COLOR: string,
    DAPP_COLOR: string,
    FRAUD_COLOR: string,
    DEFAULT_FONT_FAMILY: string,
    DEFAULT_FONT_STYLE: string,
    DEFAULT_FONT_WEIGHT: any,
    DEFAULT_FONT_SIZE: string
  }
};