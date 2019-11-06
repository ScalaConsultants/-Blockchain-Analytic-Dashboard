import React from 'react';
import Grid from '@material-ui/core/Grid';
import BarChart from '../BarChart';
import TransactionsList from '../TransactionsList';
import LineChart from '../LineChart';
import Legend from '../Legend';
import DetailsMenu from '../DetailsMenu';
import { DetailsViewProps } from './types';
import useDetailsMenuStyles from './DetailsView-styles';
import View from '../View';

const DetailsView = (props: any) => {
    const classes = useDetailsMenuStyles();
    const { description, walletSource } = props;

    return (
        <View>
            <DetailsMenu {...props} />
            <Grid container justify="flex-start" alignItems="center">
                <Grid item xs={1} className={classes.label}>
                    {walletSource}
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

export default DetailsView;
