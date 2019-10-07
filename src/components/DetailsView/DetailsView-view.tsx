import React from 'react';
import BarChart from '../BarChart';
import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';
import Legend from '../Legend';
import DetailsMenu from '../DetailsMenu';
import { withRouter } from 'react-router-dom';

const DetailsView = (props: any) => {
    const address = props.match.params.walletHash || '';
    const id = address && Math.floor(Math.random() * (30 - 1) + 1);
    return (
        <>  
            <DetailsMenu
                id={id}
                address={address}
                description="This wallet belongs to market"
                type="market" 
                blockchain="Ethereum"
                updateDescription={() => {}}/>
            <BarChart />
            <LineChart />
            <Legend />
            <TransactionsList />
        </>
    )
}

export default withRouter(DetailsView);