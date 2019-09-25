import React, { useEffect, useState } from 'react';

import LineChart from '../charts/Line/Line';

import { Block } from '../../types';
import {
  convertTimeStamp,
  convertTimeStampToHours,
  getSelectedDate
} from './helpers';

const LineCharts = (props:any): React.ReactElement => {
  const {blokchain, actions} = props;

  const [label, setLabel] = useState([
    '19-04-2019'
  ]);
  const [data, setData] = useState([10, 20, 30, 40]);

  const filterChart = (blokchain: Block[]): void => {
    const labels: any[] = [];
    const elements: number[] = [];

    blokchain.forEach((item: Block): void => {
      const timeStampConverted: string = convertTimeStamp(item.timestamp);

      // if (timeStampConverted === dateFrom) {
      //   chartType === 'selers'
      //     ? (item.source === seller && elements.push(item.amount))
      //     : (item.destination === buyer && elements.push(item.amount));
      //   labels.push(convertTimeStampToHours(item.timestamp));
      // }
    });

    setLabel(labels.slice(0, 100));
    setData(elements.slice(0, 100));
    actions.setLoaderFalse();
  };

  useEffect((): void => {
    filterChart(blokchain);
  }, [blokchain]);

  const chartLineData = {
    labels: label,
    datasets: [
      {
        label: 'ETH',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data
      }
    ]
  };


  return (
    <div>
      <LineChart
        data={chartLineData}
        width={100}
        height={100}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default LineCharts;
