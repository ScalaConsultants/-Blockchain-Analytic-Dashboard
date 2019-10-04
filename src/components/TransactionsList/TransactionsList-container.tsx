import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';

import DetailsModal from './TransactionsListDetailsModal-view';
import { HeaderColsInterface, ModalDetailsProps, TransactionsListProps } from './types';
import { timestampToDate } from './../../helpers/helpers';
import { transactionsListTableStyle } from './TransactionsList-styles';
import { Transaction } from '../../types';

const headerCols: HeaderColsInterface[] = [
  { id: 'amount', numeric: false, disablePadding: false, label: 'Amount' },
  { id: 'timestamp', numeric: false, disablePadding: true, label: 'Timestamp' },
  { id: 'exchange', numeric: false, disablePadding: false, label: 'Exchange rate' },
  { id: 'description', numeric: false, disablePadding: false, label: 'Description' }
];

const TransactionList = (props: TransactionsListProps): React.ReactElement => {
  const { actions, match, transactions} = props;

  const walletHash = match.params.walletHash;

  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState({});

  const classes = transactionsListTableStyle();

  let [pageNumber, setPageNumber]:[number, Function] = React.useState(1);


  const handleClickOpen = (data: Record<string, any>) => {
    setSelectedRow(data);
    setOpen(true);
  };

  const renderTransactionListHeader = (headerCols: HeaderColsInterface[]) =>
    (headerCols.map((row: HeaderColsInterface) => (
      <TableCell
        key={row.id}
        align={row.numeric ? 'right' : 'left'}
        padding={row.disablePadding ? 'none' : 'default'}
        className={classes.td}
      >
        {row.label}
      </TableCell>
    )));

  const renderTransactionListRows = (transactions: Transaction[]) => (
      transactions.map((row: any, index: number) => (
      <TableRow key={index + row.timestamp}>
        <TableCell className={classes.td}>{row.value}</TableCell>
        <TableCell className={classes.td} scope="row">{timestampToDate(row.timestamp)}</TableCell>
        <TableCell className={classes.td}>{row.gasPrice || 'no info'}</TableCell>
        <TableCell className={classes.td}>{row.description}</TableCell>
      </TableRow>
    )));

  const modalDetailsProps: ModalDetailsProps = {
    open,
    handleClose: () => setOpen(false),
    data: selectedRow
  };

  const handleScroll = (target: HTMLBodyElement) => {
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 30) {
      setPageNumber(pageNumber++);
    }
  }

  const checkWalletHashAndFetchTransactions = (pageNumber:number) => {
    if (walletHash) {
      actions.fetchEthereumTransactions({walletHash:walletHash, page: pageNumber});
    }
  }

  useEffect((): void => {
    checkWalletHashAndFetchTransactions(pageNumber);
  }, [pageNumber]);

  return (
    <Grid container className="Container" >
      <Grid item xs={12} lg={12}>
        <Typography variant="h2" gutterBottom>
          Recent transactions
      </Typography>
      </Grid>
      <Grid container spacing={9} className="Container">
        <Grid item xs={12} lg={12}>
          <Table>
            <TableHead className={classes.thead}>
              <TableRow>
                {renderTransactionListHeader(headerCols)}
              </TableRow>
            </TableHead>
            <TableBody 
              onScroll={(e: any) => handleScroll(e.target)} 
              id="transactionsListTableBody"
              className={classes.tbody}
              >
              {renderTransactionListRows(transactions)}
            </TableBody>
          </Table>
        </Grid>
        <DetailsModal {...modalDetailsProps} />
      </Grid>
    </Grid>

  );
};

export default withRouter(TransactionList);
