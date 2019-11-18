import { combineReducers } from "redux";
import ethereum from "./ethereum";
import tezos from "./tezos";
import notifications from './notifications';
import auth from './auth';
import common from './common';

export default combineReducers({
    common,
    auth,
    notifications,
    ethereum,
    tezos
});
