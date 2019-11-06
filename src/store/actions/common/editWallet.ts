export const EDIT_WALLET = 'EDIT_WALLET';
export const EDIT_WALLET_ERROR = 'EDIT_WALLET_ERROR';

export const ETH_EDIT_WALLET = 'ETH_EDIT_WALLET';
export const XTZ_EDIT_WALLET = 'XTZ_EDIT_WALLET';

export const editWallet = (data: any) => ({
    type: EDIT_WALLET,
    data
});

export const editWalletError = (code: string, msg: string) => ({
    type: EDIT_WALLET_ERROR,
    code,
    msg
});

export const ethEditWallet = (msg: string, data: any) => ({
    type: ETH_EDIT_WALLET,
    data
});

export const xtzEditWallet = (msg:string, data: any) => ({
    type: XTZ_EDIT_WALLET,
    data
});
