import React, { useState, useEffect, useRef } from 'react';
import {
  getClickPosition,
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

const SimpleBarChart = ({
  data,
  width = 1200,
  height = 60,
  barHeight = 60,
}: Props) => {
  const canvasRef = useRef(null);
  const totalDataValues = data.reduce((acc, next) => acc + next.value, 0);
  useEffect(() => {
    if (canvasRef.current) {
      // @ts-ignore
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgb(237,237,237)';
      ctx.fillRect(0, 0, width, height);
      setFontStyle(ctx, 12, CHART_DETAILS_COLOR, 'Arial');

      const objects = data.map((item, index) => ({
        width: width * (item.value * 100 / totalDataValues) / 100,
        // color: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        color: index % 2 === 0 ? 'rgb(83,131,185)' : 'rgb(134,180,233)',
        isOthers: (item.value * 100 / totalDataValues) < 0.1
      }));

      objects.reduce((acc, object) => {
        ctx.fillStyle = object.color;
        if (!object.isOthers) {
          ctx.fillRect(acc, 0, object.width, barHeight);
        }
        return acc + object.width;
      }, 0);
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
          border: '1px solid black',
        }}
        ref={canvasRef}
      >
        This element is not supported by your browser.
      </canvas>
    </div>
  );
};

export default SimpleBarChart;
