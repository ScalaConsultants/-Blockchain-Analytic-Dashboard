import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import { getWalletByDatasource } from '../../store/actions/blockchainSelectors';

import FiltersContainer from './DashboardFilters-container';
import { ShowWatchedOnly, State } from './types';

const FiltersRedux = () => {

  const mapState = (state: State): ShowWatchedOnly => ({
    showWatchedOnly: state.common.watchListFilter
  });

  const { showWatchedOnly } = useMappedState(mapState);

  const dispatch = useDispatch();
  
  const fetchWalletsByBlockchain = (payload: number = 1, blockchain:string): void => {
    dispatch({
      type: getWalletByDatasource(blockchain),
      payload: payload
    });
  };

  const actions = {
    fetchWalletsByBlockchain,
  };

  return (
    <FiltersContainer actions={actions} showWatchedOnly={showWatchedOnly}/>
  );
};

export default FiltersRedux;
