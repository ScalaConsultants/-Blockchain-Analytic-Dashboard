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
  interval: string,
  totalValue: number
}

export interface Transactions {
  transactions: Transaction []
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