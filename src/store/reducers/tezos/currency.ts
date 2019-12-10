import { TEZOS_SET_CURRENCY } from '../../actions/tezos/currency';

const initState: any[] = [];

export default (state = initState, action: any): any[] => {
  switch (action.type) {
    case TEZOS_SET_CURRENCY:
      return [...action.currency];
    default:
      return state;
  }
};
