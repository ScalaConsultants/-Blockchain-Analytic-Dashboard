import React, { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import LineChart from '../charts/Line/Line';

import FormControlField from '../FormControl/FormControl';

import { Block } from '../../types';
import {
  convertTimeStamp,
  convertTimeStampToHours,
  getSelectedDate
} from './helpers';

const LineCharts = (props:any): React.ReactElement => {
  const {blokchain, actions} = props;

  const [dateFrom, setDateFrom] = useState(getSelectedDate(7));
  const [label, setLabel] = useState([
    '19-04-2019'
  ]);
  const [data, setData] = useState([10, 20, 30, 40]);
  const [config, setConfig] = useState({
    chartType: 'buyers',
    label: 'Amount of the currency',
    title: 'Transactions for the selected buyer and day'
  });
  const [select, setSelect] = useState('buyers');
  const [buyer, setBuyer] = useState('buyer');
  const [seller, setSeller] = useState('seler');

  const handleBuyerChange = (e: any) => {
    setTimeout(() => setBuyer(e.target.value), 100);
  };

  const handleSellerChange = (e: any) => {
    setTimeout(() => setSeller(e.target.value), 100);
  };

  const filterChart = (blokchain: Block[], chartType: string): void => {
    const labels: any[] = [];
    const elements: number[] = [];

    blokchain.forEach((item: Block): void => {
      const timeStampConverted: string = convertTimeStamp(item.timestamp);

      if (timeStampConverted === dateFrom) {
        chartType === 'selers'
          ? (item.source === seller && elements.push(item.amount))
          : (item.destination === buyer && elements.push(item.amount));
        labels.push(convertTimeStampToHours(item.timestamp));
      }
    });

    setLabel(labels.slice(0, 100));
    setData(elements.slice(0, 100));
    actions.setLoaderFalse();
  };

  const triggerSetDateFrom = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDateFrom(e.target.value);
  };

  const submitChart = () => {
    actions.setLoaderTrue();
    setTimeout(() => filterChart(blokchain, config.chartType), 100);
  };

  const handleChartChange = (e: any): void => {
    setSelect(e.target.value);

    switch (e.target.value) {
      case 'selers':
        setConfig({
          chartType: 'selers',
          label: 'Amount of the currency',
          title: 'Transactions for the selected seller and day'
        });
        break;
      case 'buyers':
        setConfig({
          chartType: 'buyers',
          label: 'Amount of the currency',
          title: 'Transactions for the selected buyer and day'
        });
        break;
      default:
    }
  };

  useEffect((): void => {
    filterChart(blokchain, config.chartType);
  }, [blokchain]);

  const chartLineData = {
    labels: label,
    datasets: [
      {
        label: config.label,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data
      }
    ]
  };
  const sellers: string[] = [];
  const buyers: string[] = [];

  const renderSellers = () => (
    blokchain.slice(0, 50).map((item:Block) => {
      if (!sellers.includes(item.source)) {
        sellers.push(item.source);
        return (
          <MenuItem key={item.source} value={item.source}>{item.source}</MenuItem>
        );
      }
      return;
    })
  );

  const renderBuyers = () => {
    return blokchain.slice(0, 50).map((item:Block) => {
      if (!buyers.includes(item.destination)) {
        buyers.push(item.destination);
        return (
          <MenuItem key={item.destination} value={item.destination}>{item.destination}</MenuItem>
        );
      }
      return;
    });
  };

  const renderSelectChart = () => {
    return (
      <MenuItem value="selers">Sellers</MenuItem>
    );
  };

  return (
    <div>
      <div style={{ marginBottom: '30px', marginTop: '30px' }}>
        <TextField
          id="date"
          label="Select date"
          type="date"
          name="dateFrom"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            e.persist();
            setTimeout(() => triggerSetDateFrom(e), 100);
          }}
          defaultValue={getSelectedDate(0)}
          style={{ width: '30%' }}
        />
        <FormControlField
          value={select}
          onChange={(e: any) => {
            e.persist();
            setTimeout(() => handleChartChange(e), 100);
          }}
          items={renderSelectChart}
          firstItemValue={'buyers'}
          firstItemName={'Buyers'}
          inputLabel={'Select buyers'}
        />
        {config.chartType == 'buyers'
          ? (
            <FormControlField
              value={buyer}
              onChange={(e: any) => {
                handleBuyerChange(e);
              }}
              items={renderBuyers}
              firstItemValue={'buyer'}
              firstItemName={'Buyers'}
              inputLabel={'Select buyers'}
            />
          )
          : (
            <FormControlField
              value={seller}
              onChange={(e: any) => {
                handleSellerChange(e);
              }}
              items={renderSellers}
              firstItemValue={'seler'}
              firstItemName={'Sellers'}
              inputLabel={'Select sellers'}
            />
          )}
        <Button
          variant="contained"
          color="primary"
          onClick={(): void => {
            setTimeout(() => submitChart(), 100);
          }}
          style={{ marginLeft: 20, marginTop: 10 }}
        >
          Submit
        </Button>
      </div>
      <h1 style={{ textAlign: 'center' }}>{config.title}</h1>
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
