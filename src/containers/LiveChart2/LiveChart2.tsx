import { makeStyles, Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React, { useState } from 'react';
import { useMappedState } from "redux-react-hook";
import "react-datepicker/dist/react-datepicker.css";
import CustomColumnChart from '../../components/customCharts/CustomColumnChart';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2, 0),
  },
}));

const mapState = (state: any): any => ({
  blokchain: state.blokchain.blocks
});

function LiveChart2(): React.ReactElement {
  const { blokchain } = useMappedState(mapState);
  const [selectedRecordKey, setSelectedRecordKey] = useState('');
  const classes = useStyles();

  if (!blokchain.length) return <div />;

  const summedTransactions = blokchain.reduce((acc: any, next: any): any => {
    const foundIndex = acc.findIndex(
      (a: any) => a.destination === next.destination
    );
    if (foundIndex !== -1) {
      acc[foundIndex].transactions++;
    } else {
      next.transactions = 1;
      acc.push(next);
    }

    return acc;
  }, []);
  const transactionsToDisplay = summedTransactions
    .sort((a: any, b: any): number => b.transactions - a.transactions)
    .slice(0, 50);
  const dataParsedForCustom = transactionsToDisplay.map((buyer: any) => ({value: buyer.transactions, key: buyer.destination}));
  const selectedRecord = transactionsToDisplay.find((element: any) => element.destination === selectedRecordKey) || {};

  return (
    <React.Fragment>
      <h1>Top buyer (amount of transactions)</h1>
      <CustomColumnChart
        chartData={dataParsedForCustom}
        recordSelectCallback={setSelectedRecordKey}
        selectedRecordKey={selectedRecordKey}
      />
      {selectedRecordKey && (
        <Paper className={classes.root}>
          <h3>Selected record details</h3>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <List>
                <ListItem>
                  <h4 style={{ marginRight: 10 }}>transactions</h4>
                  {selectedRecord.transactions}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{ marginRight: 10 }}>destination</h4>
                  {selectedRecord.destination}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{ marginRight: 10 }}>source</h4>
                  {selectedRecord.source}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{ marginRight: 10 }}>transactions</h4>
                  {selectedRecord.transactions}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{ marginRight: 10 }}>amount</h4>
                  {selectedRecord.amount}
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                <ListItem>
                  <h4 style={{ marginRight: 10 }}>date</h4>
                  {new Date(selectedRecord.timestamp).toDateString()}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{ marginRight: 10 }}>block level</h4>
                  {selectedRecord.block_level}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{ marginRight: 10 }}>counter</h4>
                  {selectedRecord.counter}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{ marginRight: 10 }}>fee</h4>
                  {selectedRecord.fee}
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      )}
    </React.Fragment>
  );
}

export default LiveChart2;
