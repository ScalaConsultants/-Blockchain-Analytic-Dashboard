import React from 'react';
import BarChart from '../BarChart';
import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';
import Legend from '../Legend';
import DetailsMenu from '../DetailsMenu';
import { withRouter } from 'react-router-dom';
import { DetailsViewProps } from './types';

const DetailsView = (props: DetailsViewProps) => {
    const address = props.match.params.walletHash || '';
    const id: string = address && `${Math.floor(Math.random() * (30 - 1) + 1)}`;
    const [description, updateDescription] = React.useState("This wallet belongs to market");

    const update = (value: string): void => {
        updateDescription(value)
    };

    return (
        <>  
            <DetailsMenu
                id={id}
                address={address}
                description={description}
                type="market" 
                blockchain="Ethereum"
                updateDescription={update}/>
            <BarChart />
            <LineChart />
            <Legend />
            <TransactionsList description={description} />
        </>
    )
}

export default withRouter(DetailsView);