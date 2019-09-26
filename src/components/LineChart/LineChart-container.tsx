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

  const chartLineOptions = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgb(163,167,176,0.1)'
        },
        ticks: {
          maxTicksLimit: 10,
          fontColor: 'rgb(163,167,176,0.8)', // this here
        },
      }],
      yAxes: [{
        gridLines: {
          color: 'rgb(163,167,176,0.1)'
        },
        ticks: {
          maxTicksLimit: 10,
          fontColor: 'rgb(163,167,176,0.8)',
        },
      }]
    }
  }

  return (
    <div style={{ height: '400px', background: 'linear-gradient(193.66deg, rgba(37, 45, 72, 0) 49.65%, #252D48 100%)', padding: 10, borderRadius: 5 }}>
      <LineChart
        data={chartLineData}
        width={100}
        options={chartLineOptions}
      />
    </div>
  );
};

export default LineCharts;
