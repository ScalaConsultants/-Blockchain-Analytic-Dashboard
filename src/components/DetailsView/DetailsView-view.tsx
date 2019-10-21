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
import View from '../View';

const DetailsView = (props: DetailsViewProps) => {
    const classes = useDetailsMenuStyles();
    const address = props.match.params.walletHash || '';
    const wallet = props.match.params.walletSource;
    const limit = props.match.params.limit;
    const groupBy = props.match.params.groupBy;
    const id: string = address && `${Math.floor(Math.random() * (30 - 1) + 1)}`;

    const [description, updateDescription] = React.useState("This wallet belongs to market");

    const namesMap: Record<string, string> = {
        'XTZ': 'Tezos',
        'ETH': 'Ethereum'
    };

    const activeFilters = { //TODO: pass filters from dashboard
        tab: groupBy,
        zoom: '7 days',
        top: limit
    }

    const update = (value: string): void => {
        updateDescription(value);
    };

    return (
        <View>
            <DetailsMenu
                id={id}
                address={address}
                description={description}
                type="market"
                blockchain={namesMap[wallet]}
                updateDescription={update}
                activeFilters={activeFilters}
                params={props.match.params}
            />
            <Grid container justify="flex-start" alignItems="center">
                <Grid item xs={1} className={classes.label}>
                    {wallet}
                </Grid>
                <Grid item xs={10} className={classes.barchart}>
                    <BarChart minPercentage={0.5} increaseSegmentSize={2}/>
                </Grid>
            </Grid>
            <LineChart />
            <Grid container justify="flex-end" className={classes.marginTop}>
                <Legend />
            </Grid>
            <TransactionsList description={description} />
        </View>
    );
};

export default withRouter(DetailsView);
