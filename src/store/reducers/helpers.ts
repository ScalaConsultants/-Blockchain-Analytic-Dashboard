export const editWallet = (state: any, action: any) => {
  const { wallet_address, type } = action.data;
  const wallets = [...state];
  const index = wallets.findIndex((wallet: any) => wallet.walletHash === wallet_address);
  const wallet = { ...wallets[index] };
  
  wallet.type = type;
  wallets[index] = wallet;
  
  return {
    ...wallets
  }
};