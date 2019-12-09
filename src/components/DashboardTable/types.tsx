export interface BlockchainCell {
  name: string,
  icon: string,
  fullName: string
};

export interface Row {
  row: BlockchainCell
}

export interface Table {
  rows: BlockchainCell[],
  currency?: boolean,
  actions?: {
    setCurrencyOn: () => void,
    setCurrencyOff: () => void
  },
};

export interface Props {
  currency: boolean,
  actions: {
    setCurrencyOn: () => void,
    setCurrencyOff: () => void
  },
  match: {
    params: {
      blockchains: string
    }
  }
};

export interface Currency {
  currency: boolean;
};

export interface State {
  common: Currency;
};