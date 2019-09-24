import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import LineChartContainer from './LineChart-container';
import { getBlockchainByDatasource } from '../../store/reducers/dataSource';
import { Block } from "../../types";

import { LOADER_STATE } from '../../store/actions/loader';


const LineChartRedux = () => {
    const mapState = (state: any): { blokchain: Block[] } => ({
        blokchain: getBlockchainByDatasource(state, state.dataSource)
      });
      
    let initState: Block[] = [];
    const { blokchain } = useMappedState(mapState);
    const dispatch = useDispatch();

    const setLoaderFalse = (): void => {
        dispatch({
          type: LOADER_STATE,
          show: false
        });
      };
    
      const setLoaderTrue = (): void => {
        dispatch({
          type: LOADER_STATE,
          show: true
        });
      };
    
    return (
        <LineChartContainer initState={initState} blokchain={blokchain} actions={{setLoaderFalse,setLoaderTrue}}/>
    ) 
}

export default LineChartRedux;
