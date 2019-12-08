import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import { getWalletByDatasource } from '../../store/actions/blockchainSelectors';

import VolumeBar from './VolumeBar-container';

const VolumeBarRedux = () => {

  const mapState = (state: any) => ({
    showWatchedOnly: state.common.watchListFilter
  });

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
    <VolumeBar actions={actions}/>
  );
};

export default VolumeBarRedux;
