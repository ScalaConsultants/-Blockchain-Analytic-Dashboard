interface fetchWalletsByBlockchainProps {
  groupBy: string,
  limit?: number,
  from?: number, 
  to?: number,
  timeStep?: string,
}

interface urlParamsProps extends fetchWalletsByBlockchainProps{
  blockchains: string
}

export interface TimePeriodFilterProps {
  activeTimeStep?: string,
  actions: {
    fetchWalletsByBlockchain: (arg0: fetchWalletsByBlockchainProps, arg1: string) => void
  },
  urlParams: urlParamsProps,
  history: any
}

export interface FiltersProps {
  limit?: number,
  type?: string[],
  from?: number, 
  to?: number,
  timeStep?: string
}

export interface ShowWatchedOnly {
  showWatchedOnly: boolean;
}

export interface WatchListFilter {
  watchListFilter: boolean;
}

export interface State {
  common: WatchListFilter;
}
