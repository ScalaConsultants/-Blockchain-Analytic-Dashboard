import React from 'react';
import BarChart from '../BarChart';

import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';
import Legend from '../Legend';

const DetailsView = () => {

    return (
        <>
            <BarChart />
            <LineChart />
            <Legend />
            <TransactionsList />
        </>
    )
}

export default DetailsView;