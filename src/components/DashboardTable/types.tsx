import { RouteComponentProps, RouteProps } from 'react-router-dom';

export interface BlockchainCell {
  name: string,
  icon: string,
  fullName: string
}

export interface Row {
  row: BlockchainCell
}

export interface Table {
  rows: BlockchainCell[],
  type?: string,
  currency?: boolean,
  actions?: {
    setCurrencyOn: () => void,
    setCurrencyOff: () => void
  },
}

export interface Props {
  currency: boolean,
  blockchains: string,
  type: string,
  actions: {
    setCurrencyOn: () => void,
    setCurrencyOff: () => void
  }
}

export interface Params {
  match: {
    params: {
      blockchains: string,
      groupBy: string
    }
  }
}

export interface Currency {
  currency: boolean;
}

export interface State {
  common: Currency;
}

