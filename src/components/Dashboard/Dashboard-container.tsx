import React from 'react';
import { useMappedState } from 'redux-react-hook';
import StackedBarChart from './StackedBarChart';
import SimpleHorizontalBarChart from './SimpleHorizontalBarChart';
import { State } from "../../types";

const mapState = (state: State): any => ({
  tezos: state.tezos.blocks,
  ethereum: state.ethereum.blocks
});

const totalWalletsAmounts = (groupingKey: string, blockchain: any) =>
  blockchain.reduce((acc: any, next: any): any => {
    const alreadyExist = acc.find(
      (item: any) => item.key === next[groupingKey]
    );
    if (alreadyExist) {
      alreadyExist.value += next.amount;
      return acc;
    }
    const newItem = {
      key: next[groupingKey],
      value: next.amount
    };

    return [...acc, newItem];
  }, []);

const TEZOS_EXCHANGE_RATE = 1.05;
const ETHEREUM_EXCHANGE_RATE = 183.48;

function Dashboard(): React.ReactElement {
  const { tezos, ethereum } = useMappedState(mapState);

  return (
    <>
      <h1 style={{ marginBottom: 60 }}>Stacked bar chart demo</h1>

      <h2>Top buyers and sellers</h2>
      <h3>
        Wallets by total transactions values and its relation to the entire downloaded range
      </h3>
      <h3>Tezos</h3>
      <h4 style={{ marginBottom: 12 }}>Buying transactions</h4>
      <StackedBarChart
        data={totalWalletsAmounts('source', tezos).sort((a: any, b: any) => b.value - a.value)}
      />
      <h4 style={{ marginBottom: 12 }}>Selling transactions</h4>
      <StackedBarChart
        data={totalWalletsAmounts('destination', tezos).sort((a: any, b: any) => b.value - a.value)}
      />
      <p>(grey area are values that are less then 0.1% of total)</p>

      <h3>Ethereum</h3>
      <h4 style={{ marginBottom: 12 }}>Buying transactions</h4>
      <StackedBarChart
        data={totalWalletsAmounts('source', ethereum).sort((a: any, b: any) => b.value - a.value)}
      />
      <h4 style={{ marginBottom: 12 }}>Selling transactions</h4>
      <StackedBarChart
        data={totalWalletsAmounts('destination', ethereum).sort((a: any, b: any) => b.value - a.value)}
      />
      <p>(grey area are values that are less then 0.1% of total)</p>

      <h2>Total transactions values</h2>
      <SimpleHorizontalBarChart
        data={[
          {
            name: 'Tezos',
            value: totalWalletsAmounts('source', tezos).reduce((acc: any, next: any) =>
              acc + next.value, 0) / 1000000 * TEZOS_EXCHANGE_RATE
          },
          {
            name: 'Ethereum',
            value: totalWalletsAmounts('source', ethereum).reduce((acc: any, next: any) =>
              acc + next.value, 0) * ETHEREUM_EXCHANGE_RATE
          }
        ]}
      />
      <p>Value in USD (counted for 1 XTZ = {TEZOS_EXCHANGE_RATE}$, 1 ETH = {ETHEREUM_EXCHANGE_RATE}$)</p>
    </>
  );
}

export default Dashboard;
