import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import BarChart from '../BarChart';
import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';
import Legend from '../Legend';
import DetailsMenu from '../DetailsMenu';
import { DetailsViewProps } from './types';
import useDetailsMenuStyles from './DetailsView-styles';

const DetailsView = (props: DetailsViewProps) => {
    const classes = useDetailsMenuStyles();
    const address = props.match.params.walletHash || '';
    const id: string = address && `${Math.floor(Math.random() * (30 - 1) + 1)}`;
    const [description, updateDescription] = React.useState("This wallet belongs to market");
    const activeFilters = { //TODO: pass filters from dashboard
        tab: 'Buying',
        zoom: '10 days',
        top: '100'
    }

    const update = (value: string): void => {
        updateDescription(value);
    };

    return (
        <>
            <DetailsMenu
                id={id}
                address={address}
                description={description}
                type="market"
                blockchain="Ethereum"
                updateDescription={update}
                activeFilters={activeFilters}
            />
            <Grid container justify="flex-start" alignItems="center">
                <Grid item xs={1} className={classes.label}>
                    ETH
                </Grid>
                <Grid item xs={10} className={classes.barchart}>
                    <BarChart />
                </Grid>
            </Grid>
            <LineChart />
            <Legend />
            <TransactionsList description={description} />
        </>
    );
};

export default withRouter(DetailsView);
