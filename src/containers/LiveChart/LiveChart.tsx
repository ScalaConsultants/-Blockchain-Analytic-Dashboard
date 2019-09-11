import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import Box from '@material-ui/core/Box';
import LiveChartBubble from '../../components/LiveChart/LiveChartBubble';
import DatePicker from '../../components/DatePicker/DatePicker';
import colors from '../../helpers/colors';
import 'react-datepicker/dist/react-datepicker.css';
import {
  getBlockchainByDatasource,
  getSummedBlockchainByDatasource
} from '../../store/reducers/dataSource';
import { sumTransactionsByDatasource } from '../../store/actions/dataSource';

const MIN_SIZE = 70; // px;
const MAX_SIZE = 300; // px;
function calculateSize(max: number, transactions: number): number {
  // max is the biggest amount of transactions and it's always used as a base size;
  const percentage = (transactions / max) * 100;
  const size = Math.ceil(percentage / 10) * MIN_SIZE;

  return size;
}

const mapState = (state: any): any => ({
  summedBlocks: getSummedBlockchainByDatasource(state, state.dataSource),
  blocks: getBlockchainByDatasource(state, state.dataSource),
  dataSource: state.dataSource
});

function LiveChart(): React.ReactElement {
  const { summedBlocks, blocks, dataSource } = useMappedState(mapState);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const dispatch = useDispatch();

  const handleDateChange = (date: Date | null): void => {
    setSelectedDate(date);
  };

  const sumBlocksByOwner = (): void => {
    dispatch(sumTransactionsByDatasource(blocks, dataSource));
  };

  if (!blocks.length) {
    return <div />;
  }

  if (!Object.keys(summedBlocks).length) {
    sumBlocksByOwner();
    return <div />;
  }

  const transactionsToDisplay = summedBlocks.slice(0, 50);
  const mostTransactions = transactionsToDisplay[0].transactions;

  return (
    <React.Fragment>
      <DatePicker
        date={selectedDate}
        handleDateChange={handleDateChange}
        label="From"
      />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        border={2}
        borderColor="primary.secondary"
      >
        {transactionsToDisplay.map(
          (b: any, i: number): React.ReactElement => (
            <LiveChartBubble
              key={i}
              amount={b.amount}
              source={b.source}
              transactions={b.transactions}
              size={
                i === 0
                  ? MAX_SIZE
                  : calculateSize(mostTransactions, b.transactions)
              }
              color={colors[i % colors.length]}
            />
          )
        )}
      </Box>
    </React.Fragment>
  );
}

export default LiveChart;
