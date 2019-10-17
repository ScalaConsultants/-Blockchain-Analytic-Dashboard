import { combineReducers } from "redux";
import ethereum from "./ethereum";
import tezos from "./tezos";
import notifications from './notifications';

export default combineReducers({
    notifications,
    ethereum,
    tezos
});
