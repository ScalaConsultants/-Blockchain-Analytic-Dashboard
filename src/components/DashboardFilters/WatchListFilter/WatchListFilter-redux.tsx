import React from 'react';
import { useDispatch } from 'redux-react-hook';
import WatchListFilter from './WatchListFilter-container';
import * as watchListFilter from '../../../store/actions/common/watchListFilter';

const WatchListFilterRedux = () => {
  const dispatch = useDispatch();

  const toggleWatchedOnly = (): void => {
    dispatch({
      type: watchListFilter.TOGGLE_WATCHED_ONLY,
    });
  };

  const actions = {
    toggleWatchedOnly
  };

  return (
    <WatchListFilter actions={actions} />
  );
};

export default WatchListFilterRedux;
