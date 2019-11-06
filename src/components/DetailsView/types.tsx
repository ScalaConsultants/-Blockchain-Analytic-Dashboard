interface MatchProps {
  isExact: boolean,
  params: Record<string, string>,
  path: string,
  url: string
}

export interface Wallet {
  walletHash: string,
  totalValue: number, 
  percentage: number,
  description?: string,
  type?: string
}

export interface State {
  ethereum: {
    wallets: Wallet[] | []
  }
  tezos: {
    wallets: Wallet[] | []
  }
}

export interface DetailsViewReduxProps {
  history: any, 
  location: any, 
  match: MatchProps,
}

export interface DetailsContainerProps {
  walletHash?: string | any,
  walletSource?: string | any,
  limit?: string | any,
  groupBy?: string | any,
  to?: string | any,
  from?: string | any,
  wallets?: Record<string, any> | any,
  description?: string | any,
  match?: MatchProps,
  blockchains?: string | any,
  update: (data: string) => void
}

export interface DetailsViewProps extends DetailsContainerProps {
  id: string,
  zoom: string,
  description: string,
  type: string,
  blockchain: string
}