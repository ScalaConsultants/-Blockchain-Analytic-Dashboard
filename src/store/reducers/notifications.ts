import { combineReducers } from "redux";
import { ETHEREUM_FETCH_TRANSACTIONS_FAILED } from '../actions/ethereum/transactions';
import { ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED } from '../actions/ethereum/transactions-summed';
import { ETHEREUM_FETCH_WALLETS_FAILED } from '../actions/ethereum/wallets';
import { TEZOS_FETCH_TRANSACTIONS_FAILED } from '../actions/tezos/transactions';
import { EDIT_WALLET_ERROR } from '../actions/common/editWallet';
import { CLEAR_NOTIFICATION_ERROR, CLEAR_NOTIFICATION_AUTH } from '../actions/notifications';
import authActions from '../actions/auth'

import { NotificationMessage } from '../../components/Notification/types';

const errorCodes = (code: string, msg: string) => {
  const codes = {
    '401': 'There was a problem with your permissions.',
    '403': 'You don\'t have proper permissions to perform this operation.',
    '404': 'Page not found.',
    '500': 'The connection to server failed. Please try again later.',
    'msg': msg,
    'default': 'Sorry, we encountered a problem. Please try again later.',
};
  // @ts-ignore
  return codes[code];
};

const initState: [] = [];

const createRandomID = (notificationType: string) =>
  `${notificationType}-${Math.random().toString(36).substring(2, 15) + 
  Math.random().toString(36).substring(2, 15)}`;

const filterNotifications = (notifications: [], omittedID: string) => (
  notifications.filter((notification: NotificationMessage) => notification.id !== omittedID)
);

const newNotification = (name: string, type: string, code: string, msg: string = '') => ({
  // @ts-ignore
  description: errorCodes(code, msg) || errorCodes.default,
  name,
  type,
  id: createRandomID(type)
});

const errors = (state = initState, action: any): any => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS_FAILED:
    case ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED:
    case ETHEREUM_FETCH_WALLETS_FAILED:
    case TEZOS_FETCH_TRANSACTIONS_FAILED:
    case EDIT_WALLET_ERROR:
      return [...state, newNotification('error', 'error', action.code, action.msg)];
    case CLEAR_NOTIFICATION_ERROR:
      return filterNotifications(state, action.notificationID);
    default:
      return state;
  }
};

const auth = (state = initState, action: any): any => {
  switch (action.type) {
    case authActions.AUTH_USER_SIGNUP_SUCCESS_NOTIFICATIONS:
    case authActions.AUTH_USER_LOGIN_SUCCESS_NOTIFICATION:
      return [...state, newNotification('auth', 'success', 'msg', action.msg)];
    case authActions.AUTH_USER_FAIL_NOTIFICATION:
        return [...state, newNotification('auth', 'error', 'msg', action.msg)];
    case CLEAR_NOTIFICATION_AUTH:
        return filterNotifications(state, action.notificationID);
    default: return state;
  }
}

export default combineReducers({
  errors,
  auth
});
