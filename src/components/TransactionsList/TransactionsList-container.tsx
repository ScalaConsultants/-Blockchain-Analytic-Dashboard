import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';

import { HeaderColsInterface, TransactionsListProps } from './types';
import { timestampToDate } from '../../helpers/helpers';
import useTransactionsListTableStyles from './TransactionsList-styles';
import { Transaction } from '../../types';
import Loader from '../loader';

const headerCols: HeaderColsInterface[] = [
  { id: 'amount', numeric: false, disablePadding: false, label: 'Amount' },
  { id: 'timestamp', numeric: false, disablePadding: true, label: 'Timestamp' },
  { id: 'exchange', numeric: false, disablePadding: false, label: 'Exchange rate' },
  { id: 'description', numeric: false, disablePadding: false, label: 'Description' }
];

const TransactionList = (props: TransactionsListProps): React.ReactElement => {
  const { actions, match, transactions, status: { transactionsIsFetching } } = props;
  const [walletHash] = React.useState(match.params.walletHash);
  const classes = useTransactionsListTableStyles();

  /* eslint-disable-next-line prefer-const */
  let [pageNumber, setPageNumber] = React.useState(1);

  const renderTransactionListHeader = (headerColumns: HeaderColsInterface[]) =>
    headerColumns.map((row: HeaderColsInterface) => (
      <TableCell
        key={row.id}
        align={row.numeric ? 'right' : 'left'}
        padding={row.disablePadding ? 'none' : 'default'}
        className={classes.td}
      >
        {row.label}
      </TableCell>
    ));

  const renderTransactionListRows = (transactionsList: Transaction[]) =>
    transactionsList.map((row: Transaction) => (
      <TableRow key={row.timestamp}>
        <TableCell className={classes.td}>{row.value}</TableCell>
        <TableCell className={classes.td} scope="row">
          {timestampToDate(row.timestamp)}
        </TableCell>
        <TableCell className={classes.td}>{row.gasPrice || 'no info'}</TableCell>
        <TableCell className={classes.td}>{props.description}</TableCell>
      </TableRow>
    ));

  const handleScroll = (target: HTMLBodyElement) => {
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 30) {
      setPageNumber(pageNumber++);
    }
  };

  const checkWalletHashAndFetchTransactions = (wallet: string, page: number) =>
    wallet && actions.fetchEthereumTransactions({ wallet, page });

  // on handleScroll fetch next page of transactions
  useEffect((): void => {
    checkWalletHashAndFetchTransactions(walletHash, pageNumber);
  }, [pageNumber]);

  // on route change (when user clicked on bar-chart) - cleared transactions list and download the first page
  useEffect((): void => {
    actions.flushEthereumTransactions();
    setPageNumber(1);
    checkWalletHashAndFetchTransactions(match.params.walletHash, pageNumber);
  }, [match.params.walletHash]);

  return (
    <Grid container className="Container">
      <Grid item xs={12} lg={12}>
        <Typography variant="h2" gutterBottom>
          Recent transactions
        </Typography>
      </Grid>
      <Grid container spacing={9} className="Container">
        <Grid item xs={12} lg={12} className={ classes.grid }>
          <Table>
            <TableHead className={classes.thead}>
              <TableRow>{renderTransactionListHeader(headerCols)}</TableRow>
            </TableHead>
            <TableBody
              onScroll={(e: any) => handleScroll(e.target)}
              id="transactionsListTableBody"
              className={classes.tbody}
            >
              {renderTransactionListRows(transactions)}
            </TableBody>
          </Table>
          { transactionsIsFetching ? <Loader fullPage={ false } /> : null }
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(TransactionList);
