import React, { useState, useEffect, useRef } from 'react';
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

const SimpleBarChart = ({
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
  const [canvasObjects, setCanvasObjects] = useState([]);

  useEffect(() => {
    if (canvasRef.current) {
      // @ts-ignore
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      setFontStyle(ctx, 12, CHART_DETAILS_COLOR, 'Arial');

      const objects = chartData.map((e, index) => {
          const element = {
            x: 40 + CHART_PADDING + ((barWidth + spaceBetweenBars) * index),
            y: height - CHART_PADDING - e.value,
            width: barWidth,
            height: e.value,
            value: e.value,
            key: e.key,
          };
          if (element.x < width - CHART_PADDING) {
            ctx.fillStyle = selectedRecordKey === e.key ? selectedBarColor : barColor;
            ctx.fillRect(element.x, element.y, element.width, element.height);
          }
          return element
        }
      );
      // @ts-ignore
      setCanvasObjects(objects)
    }
  }, [chartData, selectedRecordKey]);

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
    </div>
  );
};

export default SimpleBarChart;
