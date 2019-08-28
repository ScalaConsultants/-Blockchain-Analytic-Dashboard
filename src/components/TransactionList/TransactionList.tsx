import React, { useState } from "react";
import { useMappedState } from "redux-react-hook";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid/Grid";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";
import TableFooter from '@material-ui/core/TableFooter';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import { stableSort, getSorting } from "../../helpers/helpers";

const useStyles1 = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexShrink: 0,
            color: theme.palette.text.secondary,
            marginLeft: theme.spacing(2.5),
        },
    }),
);

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    function handleFirstPageButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        onChangePage(event, 0);
    }

    function handleBackButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        onChangePage(event, page + 1);
    }

    function handleLastPageButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

const headerCols = [
    { id: "timestamp", numeric: false, disablePadding: true, label: "Timestamp" },
    { id: "source", numeric: false, disablePadding: false, label: "Source" },
    {
        id: "destination",
        numeric: false,
        disablePadding: false,
        label: "Destination"
    }
];

type Order = "asc" | "desc";
type OrderBy = string;

const mapState = (state: any) => ({
    blokchain: state.blokchain.blocks
});

const TransactionList = (): React.ReactElement => {
    const { blokchain } = useMappedState(mapState);
    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<OrderBy>("name");

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

    function handleChangePage(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        newPage: number,
    ) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const handleRequestSort = (event: any, property: any) => {
        if (orderBy === property && order === "desc") {
            setOrder("asc");
        } else if (orderBy === property && order === "asc") {
            setOrder("desc");
        }
        setOrderBy(property);
    };

    const createSortHandler = (property: any) => (event: any) => {
        handleRequestSort(event, property);
    };

    const timestampToDate = (timestamp: number) => {
        const newDate = new Date(timestamp);
        const formattedDate =
            ("0" + newDate.getDate()).slice(-2) +
            "-" +
            ("0" + (newDate.getMonth() + 1)).slice(-2) +
            "-" +
            newDate.getFullYear();
        const dateWithHour =
            formattedDate
                .split("-")
                .reverse()
                .join("-") +
            " " +
            newDate.getHours() +
            ":" +
            newDate.getMinutes() +
            ":" +
            newDate.getSeconds();

        return dateWithHour.toString();
    };

    const transactionListHeaderGenerate = (headerCols: Array<Object>) => {
        return (headerCols.map((row: any) => (
            <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
            >
                <Tooltip
                    title="Sort"
                    placement={row.numeric ? "bottom-end" : "bottom-start"}
                    enterDelay={300}
                >
                    <TableSortLabel
                        active={orderBy === row.id}
                        direction={order}
                        onClick={createSortHandler(row.id)}
                    >
                        {row.label}
                    </TableSortLabel>
                </Tooltip>
            </TableCell>
        )))
    }

    const transactionListRowsGenerate = (blokchain: any) => {
        return (stableSort(
            blokchain.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
            getSorting(order, orderBy)
        ).map((row: any, index: any) => (
            <TableRow hover key={index}>
                <TableCell component="th" scope="row">
                    {timestampToDate(row.timestamp)}
                </TableCell>
                <TableCell>{row.source}</TableCell>
                <TableCell>{row.destination}</TableCell>
            </TableRow>
        )))
    }

    return (
        <Grid container spacing={9} className="Container">
            <Grid item xs={12} lg={12}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {transactionListHeaderGenerate(headerCols)}
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactionListRowsGenerate(blokchain)}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[15, 25, 50, 100]}
                                colSpan={3}
                                count={blokchain.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>

                </Table>
            </Grid>
        </Grid>
    );
};

export default TransactionList;
