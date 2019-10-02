import React from 'react';
import { useMappedState } from 'redux-react-hook';

import LineChartContainer from './LineChart-container';
import { Block, State} from "../../types";


const LineChartRedux = () => {
    const mapState = (state: any): any => ({
        transactions: state
      });
      
    const { transactions } = useMappedState(mapState);
    console.log(transactions);
    
    return (
        <LineChartContainer transactions={transactions} />
    ) 
}

export default LineChartRedux;
