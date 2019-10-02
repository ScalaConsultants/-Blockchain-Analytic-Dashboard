export interface Wallet {
    walletHash: string,
    totalValue: number,
    percentage: number
}

export interface Wallets {
    wallets: Wallet[]
}

export interface setWalletsAction {
    type: string,
    wallets: Wallets
}