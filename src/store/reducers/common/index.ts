import { combineReducers } from 'redux';
import watchListFilter from './watchListFilter';
import walletsList from './walletsList';
import currency from './currency';

export default combineReducers({
    watchListFilter,
    walletsList,
    currency
});