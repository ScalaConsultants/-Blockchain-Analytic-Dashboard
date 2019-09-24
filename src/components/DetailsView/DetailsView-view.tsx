import React from 'react';

import TransactionsList from '../TransactionsList';
import LineChart from '../../containers/Charts/Line'

const DetailsView = () => {

    return (
        <>
            <LineChart/>
            <TransactionsList/>
        </>
    )
}

export default DetailsView;