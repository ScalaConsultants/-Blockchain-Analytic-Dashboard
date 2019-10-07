import React from 'react';
import BarChart from '../BarChart';
import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';
import Legend from '../Legend';
import DetailsMenu from '../DetailsMenu';
import { withRouter } from 'react-router-dom';
import { DetailsViewProps } from './types';
import Grid from '@material-ui/core/Grid';
import { useDetailsMenuStyles } from './DetailsView-styles'

const DetailsView = (props: DetailsViewProps) => {
    const classes = useDetailsMenuStyles();
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
            <Grid container justify="flex-start" alignItems="center">
                <Grid item xs={1} className={classes.label}>
                    ETH
                </Grid>
                <Grid item xs={10}>
                    <BarChart />
                </Grid>
            </Grid>
            <LineChart />
            <Legend />
            <TransactionsList description={description} />
        </>
    )
}

export default withRouter(DetailsView);