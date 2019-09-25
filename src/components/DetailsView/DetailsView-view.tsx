import React from 'react';

import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';

const DetailsView = () => {

    return (
        <>
            <LineChart/>
            <TransactionsList/>
        </>
    )
}

export default DetailsView;