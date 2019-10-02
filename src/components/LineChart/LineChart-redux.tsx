import React from 'react';
import { useMappedState } from 'redux-react-hook';

import LineChartContainer from './LineChart-container';

const LineChartRedux = () => {
    const mapState = (state: any): any => ({
        transactions: state.ethereum.transactions
      });
      
    const { transactions } = useMappedState(mapState);
    
    return (
        <LineChartContainer transactions={transactions} />
    ) 
}

export default LineChartRedux;
