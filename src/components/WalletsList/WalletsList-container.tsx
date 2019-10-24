import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import View from '../View';
import useWalletsListTableStyles from './WalletsList-styles';
import {walletsList } from './wallets';

const headerCols: any[] = [
    { id: 'id', numeric: false, disablePadding: false, label: 'ID' },
    { id: 'title', numeric: true, disablePadding: false, label: 'Title' },
    { id: 'blockchain', numeric: true, disablePadding: false, label: 'Blockchain' },
    { id: 'wallet_type', numeric: true, disablePadding: false, label: 'Wallet type' },
    { id: 'wallet_type', numeric: true, disablePadding: false, label: 'Wallet type' },

];


const WalletsList = (props: any): React.ReactElement => {

    const renderWalletsListHeader = (headerColumns: any[]) =>
        headerColumns.map((row: any) => (
            <TableCell
                key={`${row.id}${row.label}`}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                className={classes.td}
            >
                {row.label}
            </TableCell>
        ));

    const renderWalletsListRows = (walletsList: any[]) => {
        if (!walletsList.length) return
        return walletsList.map((row: any, index: number) => (
            <TableRow key={`${index}`}>
                <TableCell className={classes.td} scope="row">{row.ID}</TableCell>
                <TableCell align='right' className={classes.td} >{row.title}</TableCell>
                <TableCell align='right' className={classes.td}>{row.blockchain}</TableCell>
                <TableCell align='right' className={classes.td}>{row.wallet_type}</TableCell>
                <TableCell align='right' className={classes.td}>{row.wallet_type}</TableCell>

            </TableRow>
        ));
    }

    const classes = useWalletsListTableStyles();

    return (
        <View>
            <Grid container className="Container">
                <Grid item xs={12} lg={12}>
                    <Typography variant="h2" gutterBottom>
                        Public wallets
                     </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={9} className="Container">
                <Grid item xs={12} lg={12} className={classes.grid}>
                    <Table>
                        <TableHead className={classes.thead}>
                            <TableRow>{renderWalletsListHeader(headerCols)}</TableRow>
                        </TableHead>
                        <TableBody
                            // onScroll={(e: any) => handleScroll(e.target)}
                            id="walletsListTableBody"
                            className={classes.tbody}>{renderWalletsListRows(walletsList)}</TableBody>
                    </Table>
                    {/* <Loader isLoading={walletsIsFetching} fullPage={false} /> */}
                </Grid>
            </Grid>
        </View>
    );
};

export default WalletsList;
