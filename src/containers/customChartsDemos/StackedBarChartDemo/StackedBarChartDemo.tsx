import React, { useState } from "react";
import { useMappedState } from "redux-react-hook";
import StackedBarChart from '../../../components/customCharts/StackedBarChart';

const mapState = (state: any): any => ({
  blokchain: state.tezos.blocks
});

function SimpleBarChartDemo(): React.ReactElement {
  const { blokchain } = useMappedState(mapState);

  const [groupingKey, setGroupingKey] = useState('source');

  if (!blokchain.length) return <div />;
  const totalWalletsAmounts = blokchain.reduce((acc: any, next: any): any => {
    const alreadyExist = acc.find((item: any) => item.key === next[groupingKey]);
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
      <h1>Stacked bar chart demo</h1>
      <p>group by</p>
      <button onClick={() => setGroupingKey(groupingKey === 'source' ? 'destination' : 'source')}>
        {groupingKey}
      </button>
      <StackedBarChart
        data={totalWalletsAmounts.sort((a: any, b: any) => b.value - a.value)}
      />
    </>
  );
}

export default SimpleBarChartDemo;
