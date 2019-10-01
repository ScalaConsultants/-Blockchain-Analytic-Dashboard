export interface Wallet {
  walletHash: string,
  totalValue: number,
  percentage: number
}

export interface ViewProps {
  data: React.ReactElement<'div'>[];
};

export interface Accumulator {
  position: number,
  elements: React.ReactElement<'div'>[]
}

export interface Wallets {
  wallets: Wallet[]
}

export interface Props {
  wallets: Wallet[],
  width: number
}