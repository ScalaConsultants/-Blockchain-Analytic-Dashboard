import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid/Grid';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel/TableSortLabel';
import Typography from '@material-ui/core/Typography';

import DetailsModal from './TransactionsListDetailsModal-view';
import { stableSort, getSorting } from '../../helpers/helpers';
import { HeaderColsInterface, ModalDetailsProps, Order, OrderBy, TransactionsListProps } from './types';
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
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<OrderBy>('name');

  const { actions, match, transactions} = props;

  const walletHash = match.params.walletHash;

  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState({});

  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(100);
  const ASC = 'asc';
  const DESC = 'desc';

  const classes = transactionsListTableStyle();

  let [pageNumber, setPageNumber]:[number, Function] = React.useState(1);


  const handleRequestSort = (property: string) => {
    if (orderBy === property && order === DESC) {
      setOrder(ASC);
    } else if (orderBy === property && order === ASC) {
      setOrder(DESC);
    }
    setOrderBy(property);
  };

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
        sortDirection={orderBy === row.id ? order : false}
        className={classes.td}
      >
        <Tooltip
          title="Sort"
          placement={row.numeric ? 'bottom-end' : 'bottom-start'}
          enterDelay={300}
        >
          <TableSortLabel
            active={orderBy === row.id}
            direction={order}
            onClick={() => handleRequestSort(row.id)}
          >
            {row.label}
          </TableSortLabel>
        </Tooltip>
      </TableCell>
    )));

  const renderTransactionListRows = (transactions: Transaction[]) => (
    (stableSort(
      transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
      getSorting(order, orderBy)
    ).map((row: any, index: number) => (
      <TableRow key={index + row.timestamp}>
        <TableCell className={classes.td}>{row.value}</TableCell>
        <TableCell className={classes.td} scope="row">{timestampToDate(row.timestamp)}</TableCell>
        <TableCell className={classes.td}>{row.gasPrice || 'no info'}</TableCell>
        <TableCell className={classes.td}>{row.description}</TableCell>
      </TableRow>
    ))));

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
