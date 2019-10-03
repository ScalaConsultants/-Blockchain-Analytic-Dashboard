import React from 'react';
import { useDispatch } from 'redux-react-hook';

import DetailsViewContainer from './DetailsView-container';
import * as EthereumTransactions from '../../store/actions/ethereum/transactions';

import { RouteComponentProps } from 'react-router-dom';


const BarChartRedux = (props:RouteComponentProps) => {
    const dispatch = useDispatch();

    const fetchEthereumTransactions = (data:string): void => {
        dispatch({
            type: EthereumTransactions.ETHEREUM_FETCH_TRANSACTIONS,
            data: data
        });
    };

    const actions = {
        fetchEthereumTransactions
    }

    return (
        <DetailsViewContainer actions={actions} routeProps={props}/>
    )
}

export default BarChartRedux;
