import React from 'react';
import BarChart from '../BarChart';

import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';
import Legend from '../Legend';
import EditWalletModal from '../EditWalletModal';

const DetailsView = () => {

    return (
        <>  
            <BarChart />
            <EditWalletModal 
                id={350054}
                address="0xEEF8Ca40c5666e8c6645360C6A253Cb72507367F"
                description="This wallet belongs to market"
                update={() => {}}/>
            <LineChart />
            <Legend />
            <TransactionsList />
        </>
    )
}

export default DetailsView;