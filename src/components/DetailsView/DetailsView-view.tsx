import React from 'react';

import BarChart from '../BarChart';
import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';
import Legend from '../Legend';
import DetailsMenu from '../DetailsMenu';

const DetailsView = () => {

    return (
        <>  
            <DetailsMenu
                id={350054}
                address="0xEEF8Ca40c5666e8c6645360C6A253Cb72507367F"
                description="This wallet belongs to market"
                updateDescription={() => {}}/>
            <BarChart />
            <LineChart />
            <Legend />
            <TransactionsList />
        </>
    )
}

export default DetailsView;