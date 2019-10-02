import React from 'react';
import { useMappedState } from 'redux-react-hook';

import LineChartContainer from './LineChart-container';
import { Block, State} from "../../types";


const LineChartRedux = () => {
    const mapState = (state: State): { blokchain: Block[] } => ({
        blokchain: []
      });
      
    let initState: Block[] = [];
    const { blokchain } = useMappedState(mapState);

    
    return (
        <LineChartContainer initState={initState} blokchain={blokchain} />
    ) 
}

export default LineChartRedux;
