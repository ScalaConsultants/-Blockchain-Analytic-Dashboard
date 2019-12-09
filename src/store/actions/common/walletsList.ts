export const GET_WALLETS_LIST = 'GET_WALLETS_LIST';
export const SET_WALLETS_LIST = 'SET_WALLETS_LIST';

export const getWalletsList = () => ({
    type: GET_WALLETS_LIST,
});

export const setWalletsList = (data:any) => ({
    type: SET_WALLETS_LIST,
    data
});
