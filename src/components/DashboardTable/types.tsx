export interface BlockchainCell {
  name: string,
  icon: string
};

export interface Row {
  row: BlockchainCell
}

export interface Table {
  rows: BlockchainCell[]
};