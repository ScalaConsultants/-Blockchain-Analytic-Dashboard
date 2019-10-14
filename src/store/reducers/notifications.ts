import { combineReducers } from "redux";
import { ETHEREUM_FETCH_TRANSACTIONS_FAILED } from '../actions/ethereum/transactions';
import { ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED } from '../actions/ethereum/transactions-summed';
import { ETHEREUM_FETCH_WALLETS_FAILED } from '../actions/ethereum/wallets';
import { TEZOS_FETCH_TRANSACTIONS_FAILED } from '../actions/tezos/transactions';

import { CLEAR_NOTIFICATION_ERROR } from '../actions/notifications';

const errorCodes = {
  '401': 'Wystąpił problem z upranieniami.',
  '403': 'Nie masz odpowiednich upranień do wykonania operacji.',
  '404': 'Nie odnaleziono strony.',
  '500': 'Przepraszamy wystąpił przy próbie nawiązania połączenia z serwerem. Spróbuj ponownie później.',
  'default': 'Przepraszamy, wystąpił problem. Spróbuj ponownie później.'
};

const initState: Array<object> = [];

const createRandomID = (notificationType: string) =>
  `${notificationType}-${Math.random().toString(36).substring(2, 15) + 
  Math.random().toString(36).substring(2, 15)}`;

const filterNotifications = (notifications: [], omittedID: string) => (
  // @ts-ignore
  notifications.filter((notification: object) => notification.id !== omittedID)
);

const newNotification = (type: string, code: string) => ({
  // @ts-ignore
  description: errorCodes[code] || errorCodes.default,
  type,
  id: createRandomID(type)
});

const errors = (state = initState, action: any): any => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS_FAILED:
    case ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED:
    case ETHEREUM_FETCH_WALLETS_FAILED:
    case TEZOS_FETCH_TRANSACTIONS_FAILED:
      return [...state, newNotification('error', action.code)];
    case CLEAR_NOTIFICATION_ERROR:
      // @ts-ignore
      return filterNotifications(state, action.notificationID);
    default:
      return state;
  }
};

export default combineReducers({
  errors
});
