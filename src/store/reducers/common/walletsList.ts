import { combineReducers } from 'redux';

const SET_WALLETS_LIST = 'SET_WALLETS_LIST';
const SET_WALLETS_LIST_USER = 'SET_WALLETS_LIST_USER';

const initState = false;

const setWalletsList = (state = initState, action: any) => {
    switch (action.type) {
        case SET_WALLETS_LIST:
            return action.data;
        default:
            return state;
    }
};

const setWalletsListUser = (state = initState, action: any) => {
    switch (action.type) {
        case SET_WALLETS_LIST_USER:
            return action.data;
        default:
            return state;
    }
};

export default combineReducers({
    setWalletsListUser,
    setWalletsList
});
