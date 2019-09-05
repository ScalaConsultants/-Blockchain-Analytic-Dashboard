import React, { useState, useEffect, useRef } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import {
  getClickPosition,
  drawLine,
  setFontStyle,
} from './helpers';

interface Props {
  chartData: any[];
  recordSelectCallback: (arg: any) => any;
  selectedRecordKey: string;
  width?: number;
  height?: number;
  spaceBetweenBars?: number;
  barWidth?: number;
  barColor?: string;
  selectedBarColor?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2, 0),
  },
}));

const CHART_PADDING = 10;
const CHART_DETAILS_COLOR = 'rgb(72,72,72)';

const handleElementClick = (
  setClickedCallback: any,
  objects: any,
  clickPositions: any
) => {
  objects.forEach((element: any) => {
    if (
      clickPositions.y >= element.y &&
      clickPositions.y <= element.y + element.height &&
      clickPositions.x >= element.x &&
      clickPositions.x <= element.x + element.width
    ) {
      setClickedCallback(element.key);
    }
  });
};

const CustomColumnChart = ({
  chartData,
  recordSelectCallback,
  selectedRecordKey,
  width = 1200,
  height = 400,
  barWidth = 30,
  spaceBetweenBars = 1,
  barColor = 'rgb(98,156,200)',
  selectedBarColor = 'rgb(44,123,200)',
}: Props) => {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(0.1);
  const [canvasObjects, setCanvasObjects] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (canvasRef.current) {
      // @ts-ignore
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      setFontStyle(ctx, 12, CHART_DETAILS_COLOR, 'Arial');
      ctx.fillText('0', 4, height - 8);
      const valueOnChartTop = Math.round((height - (2 * CHART_PADDING)) / scale);
      ctx.fillText(valueOnChartTop.toString(), 4, 14);

      drawLine(ctx, 35, 10, 45, 10, CHART_DETAILS_COLOR);
      drawLine(ctx, 40, 10, 40, height - CHART_PADDING, CHART_DETAILS_COLOR);
      drawLine(ctx, 35, height - CHART_PADDING, 45, height - CHART_PADDING, CHART_DETAILS_COLOR);

      const objects = chartData.map((e, index) => {
          const element = {
            x: 40 + CHART_PADDING + ((barWidth + spaceBetweenBars) * index),
            y: height - CHART_PADDING - e.value * scale,
            width: barWidth,
            height: e.value * scale,
            value: e.value,
            key: e.key,
          };
          if (element.x < width - CHART_PADDING) {
            ctx.fillStyle = selectedRecordKey === e.key ? selectedBarColor : barColor;
            ctx.fillRect(element.x, element.y, element.width, element.height);
            if (element.height > height) {
              ctx.fillStyle = 'rgb(255,255,255)';
              ctx.beginPath();
              ctx.moveTo(element.x, CHART_PADDING + 5);
              ctx.bezierCurveTo(
                element.x + (element.width / 3), CHART_PADDING,
                element.x + (element.width / 3 * 2), CHART_PADDING + 12,
                element.x + element.width, CHART_PADDING + 8);
              ctx.lineTo(element.x + element.width, CHART_PADDING + 13);
              ctx.bezierCurveTo(
                element.x + (element.width / 3 * 2), CHART_PADDING + 17,
                element.x + (element.width / 3), CHART_PADDING + 5,
                element.x, CHART_PADDING + 10);
              ctx.lineTo(element.x, CHART_PADDING + 5);
              ctx.fill();
            }
          }
          return element
        }
      );
      // @ts-ignore
      setCanvasObjects(objects)
    }
  }, [scale, chartData, selectedRecordKey]);

  return (
    <div
      style={{
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <canvas
        width={width}
        height={height}
        style={{
          width: width,
          height: height,
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
          <RemoveIcon />
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
