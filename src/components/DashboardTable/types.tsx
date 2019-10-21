export interface BlockchainCell {
  name: string,
  icon: string,
  fullName: string
};

export interface Row {
  row: BlockchainCell
}

export interface Table {
  rows: BlockchainCell[]
};

export interface Props {
  match: {
    params: {
      blockchains: string
    }
  }
}