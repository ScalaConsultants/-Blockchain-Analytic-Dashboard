import React from 'react';
import Grid from '@material-ui/core/Grid';
import DashboardTableSideCols from './DashboardTableSideCols-view';
import BarChart from '../BarChart';
import { useDashboardTableStyles } from './DashboardTable-styles';
import { Row } from './types';

const DashboardTableRow = (props: Row) => {
  const classes = useDashboardTableStyles();
  
  return (
    <Grid container alignItems="center" className={classes.row}>
      <Grid item xs={3}>
        <DashboardTableSideCols {...props}/>
      </Grid>
      <Grid item xs={9} className={classes.barchart}>
        <BarChart 
          restLabel={false}
          shadowSegment={false}
          activeSegmentZoom={false}
          minPercentage={0.5}
          increaseSegmentSize={1}
          walletSource={props.row.name}
        />
      </Grid>
    </Grid>
  );
};

export default DashboardTableRow;
