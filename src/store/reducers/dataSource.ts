import { SET_DATA_SOURCE } from "../actions/dataSource";

const initState = 'tezos';

export const dataSource = (state = initState, action: any): any => {
    switch (action.type) {
        case SET_DATA_SOURCE:
            return action.source
        default:
            return state;
    }
};