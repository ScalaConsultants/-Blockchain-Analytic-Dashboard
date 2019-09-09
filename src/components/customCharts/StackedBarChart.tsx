import React, { useEffect, useRef } from 'react';
import {
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

const SimpleBarChart = ({
  data,
  width = 1200,
  height = 80,
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
      ctx.fillRect(0, 20, width, height);
      setFontStyle(ctx, 12, CHART_DETAILS_COLOR, 'Arial');
      ctx.fillText('0%', 0, 10);
      ctx.fillText('100%', width - 30, 10);
      const objects = data.map((item, index) => ({
        width: width * (item.value * 100 / totalDataValues) / 100,
        value: item.value * 100 / totalDataValues,
        color: index % 2 === 0 ? 'rgb(79,125,176)' : 'rgb(130,175,226)',
        isOthers: (item.value * 100 / totalDataValues) < 0.1
      }));

      objects.reduce((acc, object) => {
        ctx.fillStyle = object.color;
        if (!object.isOthers) {
          ctx.fillRect(acc, 20, object.width, barHeight);
          if (object.width > 30) {
            setFontStyle(ctx, 16, 'rgb(255,255,255)', 'Arial');
            ctx.fillText(`${Math.floor(object.value)}%`, acc - 10 + object.width / 2, 55);
          }
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
        }}
        ref={canvasRef}
      >
        This element is not supported by your browser.
      </canvas>
    </div>
  );
};

export default SimpleBarChart;
