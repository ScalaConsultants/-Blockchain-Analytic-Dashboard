import { combineReducers } from "redux";
import ethereum from "./ethereum";
import tezos from "./tezos";
import notifications from './notifications';
import auth from './auth';

export default combineReducers({
    notifications,
    ethereum,
    tezos,
    auth
});
