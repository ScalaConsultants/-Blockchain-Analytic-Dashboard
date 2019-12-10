import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import { fetchCurrencyByDatasource } from '../../store/actions/blockchainSelectors';

import VolumeBar from './VolumeBar-container';

const VolumeBarRedux = () => {

  const mapState = (state: any) => ({
    currencyTezos: state.tezos.currency,
    currencyEthereum: state.ethereum.currency
  });

  const dispatch = useDispatch();
  
  const getCurrencyByDatasource = (payload: number = 1, blockchain:string): void => {
    dispatch({
      type: fetchCurrencyByDatasource(blockchain),
      payload: payload
    });
  };

  
  const { currencyTezos, currencyEthereum} = useMappedState(mapState);
  
  console.log(currencyEthereum)
  const actions = {
    getCurrencyByDatasource,
  };

  return (
    <VolumeBar actions={actions} currencyTezos={currencyTezos} currencyEthereum={currencyEthereum} />
  );
};

export default VolumeBarRedux;
