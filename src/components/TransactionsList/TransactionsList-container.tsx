import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid/Grid';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel/TableSortLabel';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import TransactionListPagination from './TransactionsListPagination-view';
import DetailsModal from './TransactionsListDetailsModal-view';
import { stableSort, getSorting } from '../../helpers/helpers';
import { HeaderColsInterface, ModalDetailsProps, Order, OrderBy } from './types';
import { Block } from "../../types";

const headerCols: HeaderColsInterface[] = [
  { id: 'amount', numeric: false, disablePadding: false, label: 'Amount' },
  { id: 'timestamp', numeric: false, disablePadding: true, label: 'Timestamp' },
  { id: 'exchange', numeric: false, disablePadding: false, label: 'Exchange rate' },
];


const TransactionList = (props:any): React.ReactElement => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<OrderBy>('name');

  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState({});

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.blokchain.length - page * rowsPerPage);
  const ASC = 'asc';
  const DESC = 'desc';




  const handleRequestSort = (property: string) => {
    if (orderBy === property && order === DESC) {
      setOrder(ASC);
    } else if (orderBy === property && order === ASC) {
      setOrder(DESC);
    }
    setOrderBy(property);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = (data: Record<string, any>) => {
    setSelectedRow(data);
    setOpen(true);
  };

  const tablePaginationProps = {
    rowsPerPageOptions: [15, 25, 50, 100, 250],
    colSpan: 3,
    count: props.blokchain.length,
    rowsPerPage,
    page,
    SelectProps: {
      inputProps: { 'aria-label': 'rows per page' },
      native: true
    },
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    ActionsComponent: TransactionListPagination
  };

  const timestampToDate = (timestamp: number) => {
    const fullDate = new Date(timestamp)
        .toISOString()
        .substr(0, 19);

    const date = fullDate.slice(0, 10);
    const time = fullDate.slice(11, -3);

    return time + ' ' + date
  }

  const transactionListHeaderGenerate = (headerCols: HeaderColsInterface[]) =>
    (headerCols.map((row: HeaderColsInterface) => (
      <TableCell
        key={row.id}
        align={row.numeric ? 'right' : 'left'}
        padding={row.disablePadding ? 'none' : 'default'}
        sortDirection={orderBy === row.id ? order : false}
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

  const transactionListRowsGenerate = (blokchain: Block[]) =>
    (stableSort(
      blokchain.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
      getSorting(order, orderBy)
    ).map((row: Block, index: number) => (
      <TableRow onClick={() => handleClickOpen(row)} hover key={`Transaction${index}`}>
        <TableCell>{row.amount}</TableCell>
        <TableCell component="th" scope="row">{timestampToDate(row.timestamp)}</TableCell>
        <TableCell>Exchange rate</TableCell>
      </TableRow>
    )));

  const modalDetailsProps: ModalDetailsProps = {
    open,
    handleClose: () => setOpen(false),
    data: selectedRow
  };

  return (
    <Grid container spacing={9} className="Container">
      <Grid item xs={12} lg={12}>
        <h1 id="client-manager-title" className="Transactions__header">
          Transactions list
        </h1>
      </Grid>
      <Grid>
        <Grid container spacing={9} className="Container">
          <Grid item xs={12} lg={12}>
            <Table>
              <TableHead>
                <TableRow>
                  {transactionListHeaderGenerate(headerCols)}
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionListRowsGenerate(props.blokchain)}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    {...tablePaginationProps}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </Grid>
          <DetailsModal {...modalDetailsProps} />
        </Grid>
      </Grid>
    </Grid>

  );
};

export default TransactionList;
