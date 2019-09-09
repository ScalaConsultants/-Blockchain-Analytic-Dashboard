import {makeStyles, Paper} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React, {useState} from 'react';
import CustomColumnChart from '../../components/customCharts/CustomColumnChart';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2, 0)
  }
}));

const DataPresentation = ({
  dataForChart,
  fullData
}: any) => {
  const [selectedRecordKey, setSelectedRecordKey] = useState('');
  const selectedRecord = fullData.find((element: any) => element.destination === selectedRecordKey) || {};
  const classes = useStyles();

  return (
    <>
      <CustomColumnChart
        chartData={dataForChart}
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
                  <h4 style={{marginRight: 10}}>transactions</h4>
                  {selectedRecord.transactions}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{marginRight: 10}}>destination</h4>
                  {selectedRecord.destination}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{marginRight: 10}}>source</h4>
                  {selectedRecord.source}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{marginRight: 10}}>transactions</h4>
                  {selectedRecord.transactions}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{marginRight: 10}}>amount</h4>
                  {selectedRecord.amount}
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                <ListItem>
                  <h4 style={{marginRight: 10}}>date</h4>
                  {new Date(selectedRecord.timestamp).toDateString()}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{marginRight: 10}}>block level</h4>
                  {selectedRecord.block_level}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{marginRight: 10}}>counter</h4>
                  {selectedRecord.counter}
                </ListItem>
                <Divider light />
                <ListItem>
                  <h4 style={{marginRight: 10}}>fee</h4>
                  {selectedRecord.fee}
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      )}
      </>
  );
};

export default DataPresentation;
