import {
    BLOKCHAIN_SET_TRANSACTIONS,
    BLOKCHAIN_FLUSH_TRANSACTIONS,
    BLOKCHAIN_SET_MORE_TRANSACTIONS,
    BLOKCHAIN_FILTER_TRANSACTIONS
} from "../../actions/tezos/blokchain";
import { Block } from "../../../types";

const initState: Block[] = [];

export const blocks = (state = initState, action: any): Block[] => {
    switch (action.type) {
        case BLOKCHAIN_FLUSH_TRANSACTIONS:
            return initState;
        case BLOKCHAIN_SET_TRANSACTIONS:
            return action.transactions;
        case BLOKCHAIN_SET_MORE_TRANSACTIONS:
            return [...state, ...action.transactions];
        case BLOKCHAIN_FILTER_TRANSACTIONS:
            return [...action.blokchain];
        default:
            return state;
    }
};
