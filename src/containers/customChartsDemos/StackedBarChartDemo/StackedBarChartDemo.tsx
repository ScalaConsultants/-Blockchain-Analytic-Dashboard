import React from "react";
import { useMappedState } from "redux-react-hook";

const mapState = (state: any): any => ({
  blokchain: state.tezos.blocks
});

function SimpleBarChartDemo(): React.ReactElement {
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
  const dataParsedForCustom = transactionsToDisplay.map((buyer: any) => ({
    value: buyer.transactions,
    key: buyer.destination
  }));

  return (
    <>
      <h1>Stacked bar chart demo</h1>
    </>
  );
}

export default SimpleBarChartDemo;
