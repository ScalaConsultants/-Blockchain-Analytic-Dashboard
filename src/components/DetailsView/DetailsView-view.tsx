import React from 'react';

import BarChart from '../BarChart';
import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';

const DetailsView = () => {

    return (
        <>
            <BarChart />
            <LineChart />
            <TransactionsList />
        </>
    )
}

export default DetailsView;