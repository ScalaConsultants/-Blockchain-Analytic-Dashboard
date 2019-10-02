import React from 'react';
import { useMappedState } from 'redux-react-hook';

import TransactionListContainer from './TransactionsList-container';
import { Block } from "../../types";

const TransactionListRedux = () => {
    const mapState = (state: any): { blokchain: Block[] } => ({
        blokchain: []
      });
      
    let initState: Block[] = [];
    const { blokchain } = useMappedState(mapState);
    
    return (
        <TransactionListContainer initState={initState} blokchain={blokchain} />
    ) 
}

export default TransactionListRedux;

