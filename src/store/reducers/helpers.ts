export const editWallet = (state: any, action: any) => {
  const { wallet_address, type, description } = action.data;
  const wallets = [...state];
  const index = wallets.findIndex((wallet: any) => wallet.walletHash === wallet_address);
  const wallet = { ...wallets[index] };
  
  wallet.type = type;
  wallet.description = description;
  wallets[index] = wallet;
  
  return [
    ...wallets
  ]
};