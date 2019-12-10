import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import { fetchCurrencyByDatasource } from '../../store/actions/blockchainSelectors';
import { getBlockchainByDatasource } from '../../store/reducers/blockchainSelectors';

import VolumeBar from './VolumeBar-container';

const VolumeBarRedux = (props: any) => {

  const blockchain = props.walletSource;

  const mapState = (state: any) => ({
    currency: getBlockchainByDatasource(state, blockchain).currency
  });

  const dispatch = useDispatch();
  
  const getCurrencyByDatasource = (payload: number = 1): void => {
    dispatch({
      type: fetchCurrencyByDatasource(blockchain),
      payload: payload
    });
  };
  
  const { currency } = useMappedState(mapState);
  
  const actions = {
    getCurrencyByDatasource
  };

  return (
    <VolumeBar actions={actions} currency={currency} walletSource={props.walletSource} />
  );
};

export default VolumeBarRedux;
