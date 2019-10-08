import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { lineChartContainerStyle, chartLineOptions, chartLineData } from './LineChart-styles';

import LineView from './Line-view';
import { LineChartProps } from './types';
import { TransactionSummed } from '../../types';

import { convertTimeStampToHours } from './helpers';

const LineCharts = (props: LineChartProps): React.ReactElement => {
  const { transactionsSummed = [], match, actions } = props;
  const walletHash = match.params.walletHash;
  const classes = lineChartContainerStyle();
  const [labels, setLabels] = useState([
    '19-04-2019'
  ]);
  const [data, setData] = useState([10, 20, 30, 40]);

  const checkWalletHashAndFetchTransactions = () => {
    if (walletHash) {
      actions.fetchEthereumTransactionsSummed({ walletHash:walletHash });
    }
  };

  const filterChart = (): void => {
    const labels: string[] = [];
    const elements: number[] = [];

    transactionsSummed.forEach((item: TransactionSummed): void => {
      elements.push(item.totalValue);
      labels.push(convertTimeStampToHours(item.interval));
    });
    setLabels(labels);
    setData(elements);
  };

  useEffect((): void => {
    filterChart();
  }, [transactionsSummed]);

  useEffect((): void => {
    checkWalletHashAndFetchTransactions();
  }, [match.params.walletHash]);

  return (
    <div className={classes.lineChartContainer}>
      <LineView
        data={chartLineData(data, labels)}
        width={100}
        options={chartLineOptions}
      />
    </div>
  );
};

export default withRouter(LineCharts);
