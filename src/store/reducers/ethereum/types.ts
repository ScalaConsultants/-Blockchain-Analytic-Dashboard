export interface Wallet {
    walletHash: string,
    totalValue: number,
    percentage: number
}

export interface setWalletsAction {
    type: string,
    wallets: Wallet []
}