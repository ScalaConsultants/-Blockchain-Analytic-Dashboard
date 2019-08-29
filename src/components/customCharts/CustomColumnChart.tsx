import React, { useState, useEffect, useRef } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { getClickPosition } from './helpers';

interface Props {
  chartData: any[];
  recordSelectCallback: (arg: any) => any;
  selectedRecordKey: string;
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

const CustomColumnChart = ({
  chartData,
  recordSelectCallback,
  selectedRecordKey,
}: Props) => {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(0.2);
  const [canvasObjects, setCanvasObjects] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (canvasRef.current) {
      // @ts-ignore
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, CHART_WIDTH, CHART_HEIGHT);
      ctx.fillStyle = 'black';
      ctx.font = '12px Arial';
      ctx.fillText('0', 4, CHART_HEIGHT - 4);
      const valueOnChartTop = Math.floor((CHART_HEIGHT - (2 * CHART_PADDING)) / scale);
      ctx.fillText(valueOnChartTop.toString(), 4, 14);

      const objects = chartData.map((e, index) => {
        const element = {
          x: 20 + CHART_PADDING + ((BAR_WIDTH + SPACE_BETWEEN_BARS) * index),
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
        onClick={(e) => handleElementClick(recordSelectCallback, canvasObjects, getClickPosition(e, canvasRef.current))}
      >
        This element is not supported by your browser.
      </canvas>
      <Paper
        className={classes.root}
      >
        <span>Zoom {Math.floor(scale * 10)}</span>
        <IconButton
          size="small"
          color="secondary"
          aria-label="minus"
          onClick={() => scale >= 0.2 ? setScale(scale - 0.1) : null}
        >
          <RemoveIcon  />
        </IconButton>
        <IconButton
          size="small"
          color="secondary"
          aria-label="plus"
          onClick={() => setScale(scale + 0.1)}
        >
          <AddIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default CustomColumnChart;
