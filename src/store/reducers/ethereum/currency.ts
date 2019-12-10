import { ETHEREUM_SET_CURRENCY } from '../../actions/ethereum/currency';

const initState: any = {};

export default (state = initState, action: any): any => {
  switch (action.type) {
    case ETHEREUM_SET_CURRENCY:
      return action.currency;
    default:
      return state;
  }
};
