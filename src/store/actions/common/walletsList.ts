export const GET_WALLETS_LIST = 'GET_WALLETS_LIST';
export const SET_WALLETS_LIST = 'SET_WALLETS_LIST';

export const GET_WALLETS_LIST_USER = 'GET_WALLETS_LIST_USER';
export const SET_WALLETS_LIST_USER = 'SET_WALLETS_LIST_USER';

export const getWalletsList = () => ({
    type: GET_WALLETS_LIST,
});

export const setWalletsList = (data:any) => ({
    type: SET_WALLETS_LIST,
    data
});


export const getWalletsListUser = () => ({
    type: GET_WALLETS_LIST_USER,
});

export const setWalletsListUser = (data:any) => ({
    type: SET_WALLETS_LIST_USER,
    data
});
