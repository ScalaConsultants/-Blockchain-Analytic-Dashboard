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
    { id: 'title', numeric: false, disablePadding: false, label: 'Title' },
    { id: 'blockchain', numeric: false, disablePadding: false, label: 'Blockchain' },
    { id: 'wallet_type', numeric: false, disablePadding: false, label: 'Wallet type' },
    { id: 'watched', numeric: false, disablePadding: false, label: 'Watched' },

];


const WalletsList = (props: any): React.ReactElement => {

    const renderWalletsListHeader = (headerColumns: any[]) =>
        headerColumns.map((row: any) => (
            <TableCell
                key={`${row.id}${row.label}`}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
               
            >
                {row.label}
            </TableCell>
        ));

    const renderWalletsListRows = (walletsList: any[]) => {
        if (!walletsList.length) return
        return walletsList.map((row: any, index: number) => (
            <TableRow key={`${index}`}>
                <TableCell  scope="row">{row.ID}</TableCell>
                <TableCell   >{row.title}</TableCell>
                <TableCell  >{row.blockchain}</TableCell>
                <TableCell  >{row.wallet_type}</TableCell>
                <TableCell >{row.wallet_type}</TableCell>

            </TableRow>
        ));
    }

    const classes = useWalletsListTableStyles();

    return (
        <View>
            <Grid container className="Container">
                <Grid item xs={3} lg={3}>
                    <Typography variant="h2" gutterBottom>
                        Favourite wallet
                     </Typography>
                     
                </Grid>
                <Grid item xs={6} lg={6}>
                    <Typography variant="h2" gutterBottom>
                        Public wallet
                     </Typography>
                     
                </Grid>
            <Grid container spacing={9} className="Container">
                <Grid item xs={12} lg={12} >
                    <Table>
                        <TableHead >
                            <TableRow>{renderWalletsListHeader(headerCols)}</TableRow>
                        </TableHead>
                        <TableBody
                            // onScroll={(e: any) => handleScroll(e.target)}
                            id="walletsListTableBody"
                            >{renderWalletsListRows(walletsList)}</TableBody>
                    </Table>
                    {/* <Loader isLoading={walletsIsFetching} fullPage={false} /> */}
                </Grid>
            </Grid>
            </Grid>

        </View>
    );
};

export default WalletsList;
