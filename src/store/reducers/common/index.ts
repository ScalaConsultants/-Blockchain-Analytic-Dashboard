import { combineReducers } from 'redux';
import watchListFilter from './watchListFilter';
import currency from './currency';

export default combineReducers({
    watchListFilter,
    currency
});