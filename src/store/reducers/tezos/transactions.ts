import {
    BLOKCHAIN_SET_TRANSACTIONS,

} from '../../actions/tezos/transactions';
import { Block } from '../../../types';

const initState: Block[] = [];

const transactions = (state = initState, action: any): Block[] => {
    switch (action.type) {
        case BLOKCHAIN_SET_TRANSACTIONS:
            return action.transactions;
        default:
            return state;
    }
};

export default transactions;
