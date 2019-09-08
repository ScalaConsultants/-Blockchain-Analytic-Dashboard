import React from 'react';
import { useMappedState } from 'redux-react-hook';
import StackedBarChart from '../../../components/customCharts/StackedBarChart';
import SimpleHorizontalBarChart from '../../../components/customCharts/SimpleHorizontalBarChart';

const mapState = (state: any): any => ({
  blokchain: state.tezos.blocks
});

function SimpleBarChartDemo(): React.ReactElement {
  const { blokchain } = useMappedState(mapState);

  const totalWalletsAmounts = (groupingKey: string) =>
    blokchain.reduce((acc: any, next: any): any => {
      const alreadyExist = acc.find(
        (item: any) => item.key === next[groupingKey]
      );
      if (alreadyExist) {
        alreadyExist.value += next.amount;
        return acc;
      }
      const newItem = {
        key: next[groupingKey],
        value: next.amount,
      };

      return [...acc, newItem];
    }, []);

  return (
    <>
      <h1 style={{ marginBottom: 60 }}>Stacked bar chart demo</h1>

      <h2>Top buyers and sellers</h2>
      <h3>
        Wallets by total transactions values and its relation to the entire downloaded range
      </h3>

      <h4 style={{ marginBottom: 12 }}>Buying transactions</h4>
      <StackedBarChart
        data={totalWalletsAmounts('source').sort((a: any, b: any) => b.value - a.value)}
      />
      <h4 style={{ marginBottom: 12 }}>Selling transactions</h4>
      <StackedBarChart
        data={totalWalletsAmounts('destination').sort((a: any, b: any) => b.value - a.value)}
      />
      <p>(grey area are values that are less then 0.1% of total)</p>

      <h2>Total transactions values</h2>
      <SimpleHorizontalBarChart
        data={[
          {
            name: 'Buying',
            value: totalWalletsAmounts('source').reduce((acc: any, next: any) => acc + next.value, 0)
          },
          {
            name: 'Selling',
            value: totalWalletsAmounts('destination').reduce((acc: any, next: any) => acc + next.value, 0)
          },

        ]}
      />
      <p>Value in USD divided by 1000000000</p>
    </>
  );
}

export default SimpleBarChartDemo;
