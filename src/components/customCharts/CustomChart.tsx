import React, { useState, useEffect, useRef } from 'react';

interface Props {
  data: any[];
}

const CHART_WIDTH = 1300;
const CHART_HEIGHT = 640;
const CHART_PADDING = 10;

const BAR_WIDTH = 30;
const SPACE_BETWEEN_BARS = 1;

const CustomChart = ({
  data,
}: Props) => {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(0.2);

  useEffect(() => {
    if (canvasRef.current) {
      // @ts-ignore
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0,0,CHART_WIDTH, CHART_HEIGHT);
      ctx.fillStyle = 'rgb(98,156,200)';
      data.forEach((e, index) => {
        ctx.fillRect(CHART_PADDING + ((BAR_WIDTH + SPACE_BETWEEN_BARS) * index), CHART_HEIGHT - CHART_PADDING - e * scale, BAR_WIDTH, e * scale);
      });
    }
  });

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
        style={{border: '1px solid black'}}
        ref={canvasRef}
      >
        This element is not supported by your browser.
      </canvas>
      <input
        type="number"
        value={scale * 10}
        onChange={e => setScale(parseInt(e.target.value, 10) / 10)}
      />
    </div>
  );
};

export default CustomChart;
