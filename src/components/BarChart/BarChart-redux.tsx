import React from 'react';
import { useMappedState } from 'redux-react-hook';

import BarChartContainer from './BarChart-container';
import { getBlockchainByDatasource } from '../../store/reducers/dataSource';
import { Block, State } from "../../types";

const BarChartRedux = () => {
    const mapState = (state: State): { blokchain: Block[] } => ({
        blokchain: getBlockchainByDatasource(state, state.dataSource)
    });

    const { blokchain } = useMappedState(mapState);

    return (
        <BarChartContainer blokchain={blokchain} width={2000} />
    )
}

export default BarChartRedux;
