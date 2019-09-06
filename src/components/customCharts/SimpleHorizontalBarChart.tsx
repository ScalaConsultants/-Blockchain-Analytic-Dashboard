import React, { useEffect, useRef } from 'react';
import {
  drawLine,
  setFontStyle,
} from './helpers';

interface Props {
  data: any[];
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
      setFontStyle(ctx, 12, CHART_DETAILS_COLOR, 'Arial');
      drawLine(ctx, 60, 20, width - 5, 20, CHART_DETAILS_COLOR);
      drawLine(ctx, 60, 15, 60, 25, CHART_DETAILS_COLOR);
      drawLine(ctx, width - 5, 15, width - 5, 25, CHART_DETAILS_COLOR);
      ctx.fillText('0', 60, 10);
      const highestValue = data.reduce((acc, next) => next.value > acc ? next.value : acc, 0);
      ctx.fillText(`${Math.floor(highestValue / 1000000000)}`, width - 50, 10);

      const objects = data.map(item => ({
        width: item.value / 1000000000,
        value: item.value,
        name: item.name,
        color: `rgb(130,175,226)`,
      }));
      objects.forEach((object, index) => {
        setFontStyle(ctx, 12, CHART_DETAILS_COLOR, 'Arial');
        ctx.fillText(object.name, 0, index * (barHeight + 10) + 60);
        ctx.fillStyle = object.color;
        ctx.fillRect(60, index * (barHeight + 10) + 30, object.width, barHeight);
        setFontStyle(ctx, 16, 'rgb(255,255,255)', 'Arial');
        console.log(object.width)
        ctx.fillText(`${Math.floor(object.value / 1000000000)}`, object.width / 2 + 60, index * (barHeight + 10) + 65);
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
