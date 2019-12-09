const SET_WALLETS_LIST = 'SET_WALLETS_LIST';

const initState = false;

export default (state = initState, action: any) => {
  switch (action.type) {
    case SET_WALLETS_LIST:
      return action.data;
    default:
      return state;
  }
};

