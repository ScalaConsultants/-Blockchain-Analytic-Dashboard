import React from 'react';
import { useMappedState } from 'redux-react-hook';

import TransactionListContainer from './TransactionsList-container';
import { getBlockchainByDatasource } from '../../store/reducers/dataSource';
import { Block, State } from "../../types";

const TransactionListRedux = () => {
    const mapState = (state: State): { blokchain: Block[] } => ({
        blokchain: getBlockchainByDatasource(state, state.dataSource)
      });
      
    let initState: Block[] = [];
    const { blokchain } = useMappedState(mapState);
    
    return (
        <TransactionListContainer initState={initState} blokchain={blokchain} />
    ) 
}

export default TransactionListRedux;

