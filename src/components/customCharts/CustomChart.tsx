import React, { useState, useEffect, useRef } from 'react';

interface Props {
  chartData: any[];
  fullData: any[];
}

const CHART_WIDTH = 1300;
const CHART_HEIGHT = 640;
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
      clickPositions.y > element.y &&
      clickPositions.y < element.y + element.height &&
      clickPositions.x > element.x &&
      clickPositions.x < element.x + element.width
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
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      // @ts-ignore
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, CHART_WIDTH, CHART_HEIGHT);
      ctx.fillStyle = 'rgb(98,156,200)';

      const test = chartData.map((e, index) => {
        const element = {
          x: CHART_PADDING + ((BAR_WIDTH + SPACE_BETWEEN_BARS) * index),
          y: CHART_HEIGHT - CHART_PADDING - e.value * scale,
          width: BAR_WIDTH,
          height: e.value * scale,
          value: e.value,
          key: e.key,
        };
        ctx.fillRect(element.x, element.y, element.width, element.height);
        return element
      });
      // @ts-ignore
      setCanvasObjects(test)
    }
  }, [scale, chartData]);

  const selectedRecord = fullData.find((element: any) => element.source === selectedItem) || {};
console.log(selectedRecord)

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
        style={{ border: '1px solid black' }}
        ref={canvasRef}
        onClick={(e) => handleElementClick(setSelectedItem, canvasObjects, getClickPosition(e, canvasRef.current))}
      >
        This element is not supported by your browser.
      </canvas>
      <input
        type="number"
        value={scale * 10}
        onChange={e => setScale(parseInt(e.target.value, 10) / 10)}
      />
      <div>
        <p>Selected record details:</p>
        <p>source: {selectedRecord.source}</p>
        <p>destination: {selectedRecord.destination}</p>
        <p>amount: {selectedRecord.amount}</p>
        <p>block level: {selectedRecord.block_level}</p>
        <p>counter: {selectedRecord.counter}</p>
        <p>fee: {selectedRecord.fee}</p>
        <p>transactions: {selectedRecord.transactions}</p>
        <p>date: {new Date(selectedRecord.timestamp).toDateString()}</p>
      </div>
    </div>
  );
};

export default CustomChart;
