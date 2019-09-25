import React, { useEffect, useState } from 'react';

import LineChart from './Line-view';

import {
  convertTimeStampToHours,
} from './helpers';

import testData from './data';

const LineCharts = (props: any): React.ReactElement => {
  const { blokchain, actions } = props;

  const [label, setLabel] = useState([
    '19-04-2019'
  ]);
  const [data, setData] = useState([10, 20, 30, 40]);

  const filterChart = (): void => {
    const labels: any[] = [];
    const elements: number[] = [];

    testData.forEach((item): void => {
      elements.push(item.totalValue);
      labels.push(convertTimeStampToHours(item.interval));

    });
    setLabel(labels);
    setData(elements);
    actions.setLoaderFalse();
  };

  useEffect((): void => {
    filterChart();
  }, [blokchain]);

  const chartLineData = {
    labels: label,
    datasets: [
      {
        label: 'ETH',
        backgroundColor: 'rgba(255,99,132,0.0)',
        borderColor: 'rgba(107,94,233,0.5)',
        borderWidth: 4,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data,
        lineTension: 0,
      }
    ],
  }

  return (
    <div style={{ height: '400px' }}>
      <LineChart
        data={chartLineData}
        width={100}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default LineCharts;
