import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid/Grid';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import DetailsModal from './TransactionsListDetailsModal-view';
import { stableSort, getSorting } from '../../helpers/helpers';
import { HeaderColsInterface, ModalDetailsProps, Order, OrderBy, TransactionsListProps } from './types';
import { timestampToDate } from './../../helpers/helpers';
import { Block } from "../../types";

const headerCols: HeaderColsInterface[] = [
  { id: 'amount', numeric: false, disablePadding: false, label: 'Amount' },
  { id: 'timestamp', numeric: false, disablePadding: true, label: 'Timestamp' },
  { id: 'exchange', numeric: false, disablePadding: false, label: 'Exchange rate' },
  { id: 'description', numeric: false, disablePadding: false, label: 'Description' }
];

//Add props type
const TransactionList = (props: TransactionsListProps): React.ReactElement => {

  console.log(props);

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<OrderBy>('name');

  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState({});

  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(100);
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

  const renderTransactionListRows = (blokchain: Block[]) =>
    (stableSort(
      blokchain.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
      getSorting(order, orderBy)
    ).map((row: Block, index: number) => (
      <TableRow onClick={() => handleClickOpen(row)} hover key={`Transaction${index}`}>
        <TableCell>{row.amount}</TableCell>
        <TableCell component="th" scope="row">{timestampToDate(row.timestamp)}</TableCell>
        <TableCell>Exchange rate</TableCell>
        <TableCell>Description</TableCell>
      </TableRow>
    )));

  const modalDetailsProps: ModalDetailsProps = {
    open,
    handleClose: () => setOpen(false),
    data: selectedRow
  };

  let hasNextPage = (props.blokchain.length / 50) > 1;

  const itemCount = hasNextPage ? props.blokchain.length + 1 : props.blokchain.length;

  const loadMoreItems:any = !hasNextPage ? () => { } : props.blokchain.length;

  const isItemLoaded = (index: any) => !page || index < props.blokchain.length;

  const Item = (index: any) => {
    let content;
    if (!isItemLoaded(index)) {
      content = "Loading...";
    } else {
      content = (
        <Table>
          {( index.index === 0 ) &&
            ( <TableHead>
              <TableRow>
                {renderTransactionListHeader(headerCols)}
              </TableRow>
            </TableHead> )
            }

          <TableBody>
            {renderTransactionListRows(props.blokchain)}
          </TableBody>
        </Table>
      )
    }

      return <div>{content}</div>;
    };
    
    return (
      <Grid container className="Container">
        <Grid item xs={12} lg={12}>
          <Typography variant="h2" gutterBottom>
            Recent transactions
      </Typography>
        </Grid>
        <Grid container spacing={9} className="Container">
          <Grid item xs={12} lg={12}>
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadMoreItems}
            >
              {({ onItemsRendered, ref }) => (
                <List
                  className="List"
                  height={300}
                  itemCount={itemCount}
                  itemSize={30}
                  onItemsRendered={onItemsRendered}
                  ref={ref}
                  width={1224}
                >
                  {Item}
                </List>
              )}
            </InfiniteLoader>
          </Grid>
          <DetailsModal {...modalDetailsProps} />
        </Grid>
      </Grid>

    );
  };

  export default TransactionList;
