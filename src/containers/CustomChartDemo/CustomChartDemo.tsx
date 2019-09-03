import React from 'react';
import { useMappedState } from "redux-react-hook";
import "react-datepicker/dist/react-datepicker.css";
import DataPresentation from './DataPresentation';

const mapState = (state: any): any => ({
  blokchain: state.blokchain.blocks
});

function CustomChartDemo(): React.ReactElement {
  const { blokchain } = useMappedState(mapState);

  if (!blokchain.length) return <div />;

  const summedTransactions = blokchain.reduce((acc: any, next: any): any => {
    const foundIndex = acc.findIndex(
      (a: any) => a.destination === next.destination
    );
    if (foundIndex !== -1) {
      acc[foundIndex].transactions++;
    } else {
      next.transactions = 1;
      acc.push(next);
    }

    return acc;
  }, []);
  const transactionsToDisplay = summedTransactions
    .sort((a: any, b: any): number => b.transactions - a.transactions)
    .slice(0, 50);
  const dataParsedForCustom = transactionsToDisplay.map((buyer: any) => ({value: buyer.transactions, key: buyer.destination}));

  return (
    <>
      <h1>Top buyer (amount of transactions)</h1>
      <DataPresentation
        dataForChart={dataParsedForCustom}
        fullData={transactionsToDisplay}
      />
    </>
  );
}

export default CustomChartDemo;
