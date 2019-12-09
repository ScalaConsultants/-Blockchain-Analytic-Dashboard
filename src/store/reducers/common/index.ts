import { combineReducers } from 'redux';
import watchListFilter from './watchListFilter';
import walletsList from './walletsList';

export default combineReducers({
    watchListFilter,
    walletsList
});