import React from 'react';

import BarChart from '../BarChart';
import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';

const DetailsView = (props:any) => {

    return (
        <>
            <BarChart />
            <LineChart />
            <TransactionsList />
        </>
    )
}

export default DetailsView;