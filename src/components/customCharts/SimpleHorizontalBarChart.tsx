import React, { useEffect, useRef } from 'react';
import {
  drawLine,
  setFontStyle,
} from './helpers';

interface ChartData {
  name: string;
  value: number;
}

interface Props {
  data: ChartData[];
  width?: number;
  height?: number;
  spaceBetweenBars?: number;
  barHeight?: number;
  barColor?: string;
  selectedBarColor?: string;
}

const CHART_DETAILS_COLOR = 'rgb(72,72,72)';

const SimpleHorizontalBarChart = ({
  data,
  width = 1200,
  height = 160,
  barHeight = 60,
}: Props) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      // @ts-ignore
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      const CHART_BOX_SIZE = {
        xStart: 60,
        yStart: 30,
        xEnd: width - 10,
        yEnd: height - 10,
      };
      setFontStyle(ctx, 12, CHART_DETAILS_COLOR, 'Arial');
      drawLine(ctx, CHART_BOX_SIZE.xStart, 20, CHART_BOX_SIZE.xEnd, 20, CHART_DETAILS_COLOR);
      drawLine(ctx, CHART_BOX_SIZE.xStart, 15, 60, 25, CHART_DETAILS_COLOR);
      drawLine(ctx, CHART_BOX_SIZE.xEnd, 15, CHART_BOX_SIZE.xEnd, 25, CHART_DETAILS_COLOR);
      ctx.fillText('0', CHART_BOX_SIZE.xStart, 10);
      const highestValue = Math.floor(data.reduce((acc, next) => next.value > acc ? next.value : acc, 0));
      ctx.fillText(`${highestValue}`, width - (`${highestValue}`.length * 8), 10);

      const objects = data.map(item => ({
        width: (CHART_BOX_SIZE.xEnd - CHART_BOX_SIZE.xStart) * item.value / highestValue,
        value: item.value,
        name: item.name,
        color: `rgb(130,175,226)`,
      }));

      objects.forEach((object, index) => {
        setFontStyle(ctx, 12, CHART_DETAILS_COLOR, 'Arial');
        ctx.fillText(
          object.name,
          0,
          index * (barHeight + 10) + 60
        );
        ctx.fillStyle = object.color;
        ctx.fillRect(CHART_BOX_SIZE.xStart, index * (barHeight + 10) + 30, object.width, barHeight);
        setFontStyle(ctx, 16, 'rgb(255,255,255)', 'Arial');
        const valueToShow = `${Math.floor(object.value)}`;
        ctx.fillText(
          valueToShow,
          object.width / 2 + CHART_BOX_SIZE.xStart - valueToShow.length * 4,
          index * (barHeight + 10) + 65,
        );
      });
    }
  }, [data]);


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <canvas
        width={width}
        height={height}
        style={{
          width: width,
          height: height,
        }}
        ref={canvasRef}
      >
        This element is not supported by your browser.
      </canvas>
    </div>
  );
};

export default SimpleHorizontalBarChart;
