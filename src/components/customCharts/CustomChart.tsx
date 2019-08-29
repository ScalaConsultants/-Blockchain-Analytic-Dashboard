import React, { useState, useEffect, useRef } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

interface Props {
  chartData: any[];
  fullData: any[];
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2, 0),
  },
}));

const CHART_WIDTH = 1200;
const CHART_HEIGHT = 400;
const CHART_PADDING = 10;

const BAR_WIDTH = 30;
const SPACE_BETWEEN_BARS = 1;

const getClickPosition = (e: any, canvas: any) => {
  const xClick = e.pageX - canvas.offsetLeft;
  const yClick = e.pageY - canvas.offsetTop;

  return { x: xClick, y: yClick }
};

const handleElementClick = (setClickedCallback: any, objects: any, clickPositions: any) => {
  objects.forEach((element: any) => {
    if (
      clickPositions.y >= element.y &&
      clickPositions.y <= element.y + element.height &&
      clickPositions.x >= element.x &&
      clickPositions.x <= element.x + element.width
    ) {
      setClickedCallback(element.key)
    }
  });
};

const CustomChart = ({
  chartData,
  fullData,
}: Props) => {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(0.2);
  const [canvasObjects, setCanvasObjects] = useState([]);
  const [selectedRecordKey, setSelectedRecordKey] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    if (canvasRef.current) {
      // @ts-ignore
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, CHART_WIDTH, CHART_HEIGHT);

      const objects = chartData.map((e, index) => {
        const element = {
          x: CHART_PADDING + ((BAR_WIDTH + SPACE_BETWEEN_BARS) * index),
          y: CHART_HEIGHT - CHART_PADDING - e.value * scale,
          width: BAR_WIDTH,
          height: e.value * scale,
          value: e.value,
          key: e.key,
        };
        ctx.fillStyle = selectedRecordKey === e.key ? 'rgb(44,123,200)' : 'rgb(98,156,200)';
        ctx.fillRect(element.x, element.y, element.width, element.height);
        return element
      });
      // @ts-ignore
      setCanvasObjects(objects)
    }
  }, [scale, chartData, selectedRecordKey]);

  const selectedRecord = fullData.find((element: any) => element.destination === selectedRecordKey) || {};

  return (
    <div style={{
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <canvas
        width={CHART_WIDTH}
        height={CHART_HEIGHT}
        style={{
          border: '1px solid black',
          width: CHART_WIDTH,
          height: CHART_HEIGHT,
          marginBottom: 10,
        }}
        ref={canvasRef}
        onClick={(e) => handleElementClick(setSelectedRecordKey, canvasObjects, getClickPosition(e, canvasRef.current))}
      >
        This element is not supported by your browser.
      </canvas>
      <Paper
        className={classes.root}
      >
        <span>Zoom {Math.floor(scale * 10)}</span>
        <IconButton size="small" color="secondary" aria-label="minus">
          <RemoveIcon onClick={() => scale >= 0.2 ? setScale(scale - 0.1) : null} />
        </IconButton>
        <IconButton size="small" color="secondary" aria-label="plus">
          <AddIcon onClick={() => setScale(scale + 0.1)} />
        </IconButton>
      </Paper>
      {selectedRecordKey && (
        <Paper className={classes.root}>
          <h3>Selected record details</h3>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <List>
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
    </div>
  );
};

export default CustomChart;
