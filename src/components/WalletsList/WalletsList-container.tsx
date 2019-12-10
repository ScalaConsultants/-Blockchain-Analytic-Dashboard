/*eslint-disable react-hooks/exhaustive-deps*/

import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import clsx from 'clsx';
import { useEffect } from 'react';

import { Markets, Blockchains, WalletType } from '../../types';
import { Order, OrderBy, HeaderColsInterface, Wallet } from './types';
import useWalletsListTableStyles from './WalletsList-styles';

import View from '../View';
import SwitchButton from '../SwitchButton';

import { stableSort, getSorting } from "../../helpers/helpers";


const { PUBLIC_URL } = process.env;

const headerCols: HeaderColsInterface[] = [
    { id: 'wallet_address', numeric: false, disablePadding: false, label: 'ID', sort: true },
    { id: 'title', numeric: false, disablePadding: false, label: 'Title', sort: true },
    { id: 'blockchain', numeric: false, disablePadding: false, label: 'Blockchain', sort: true },
    { id: 'type', numeric: false, disablePadding: false, label: 'Wallet type', sort: true },
    { id: 'watched', numeric: false, disablePadding: false, label: 'Watched', sort: false },
    { id: 'edit', numeric: false, disablePadding: false, label: '', sort: false },
];

const WalletsList = (props: any): React.ReactElement => {

    const [switchWallet, setSwitchWallet] = React.useState(WalletType.PRIVATE);
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<OrderBy>("id");
    const { actions, publicList, userList } = props;

    const handleRequestSort = (property: string) => {
        if (order === "desc") {
            setOrder("asc");
        } else if (order === "asc") {
            setOrder("desc");
        }
        setOrderBy(property);
    };

    const renderWalletsListHeader = (headerColumns: HeaderColsInterface[]) =>
        headerColumns.map((row: HeaderColsInterface) => (
            <TableCell
                key={`${row.id}${row.label}`}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
            > {row.sort ?
                <div className={classes.headerWithSort} onClick={() => handleRequestSort(row.id)}>
                    <span className={row.id === 'watched' ? classes.labelDisabled : ''}>{row.label}</span>
                    {row.sort &&
                        <div>
                            <ArrowDropUpIcon
                                fontSize='small'
                                className={(orderBy === row.id && order === 'asc') ? classes.arrowUp : clsx([classes.labelDisabled, classes.arrowUp])}
                            />
                            <ArrowDropDownIcon
                                fontSize='small'
                                className={(orderBy === row.id && order === 'desc') ? classes.arrowDown : clsx([classes.labelDisabled, classes.arrowDown])}
                            />
                        </div>
                    }
                </div>
                :
                <span className={row.id === 'watched' ? classes.labelDisabled : ''}>{row.label}</span>
                }
            </TableCell>
        ));

    useEffect((): void => {
        actions.getWalletsList();
        actions.getWalletsListUser();
    }, []);

    const selectIcon = (blockchain: string) => {
        switch (blockchain) {
            case Blockchains.XTZ:
                return 'tezos';
            case Blockchains.ETH:
                return 'eth';
            default:
                return 'eth'
        }
    }

    const toggleSwitch = (data: Wallet, type: string) => {
        data.watched = !data.watched;
        if (type === 'public') {
            actions.editWalletsList(data);
            actions.getWalletsList();

        } else {
            actions.editWalletsListUser(data);
            actions.getWalletsListUser();
        }
    }

    const selectWalletColor = (market: string) => {
        switch (market) {
            case Markets.MARKET:
                return classes.marketColor;
            case Markets.PRIVATE:
                return classes.privateColor;
            case Markets.DAPP:
                return classes.dappColor;
            case Markets.FRAUD:
                return classes.fraudColor;
            case Markets.UNASSIGNED:
                return classes.unassignedColor;
            default:
                return classes.marketColor
        }
    }

    const renderWalletsListRows = (walletsList: Wallet[], type: string) => {
        return walletsList.length &&
            (stableSort(
                walletsList,
                getSorting(order, orderBy)
            )).map((row: any, index: number) => (
                <TableRow key={`${index}`}>
                    <TableCell scope="row"><b>{index}</b>&nbsp; &nbsp;<b className={classes.labelDisabled}>{row.wallet_address}</b></TableCell>
                    <TableCell className={classes.rowEl}>{row.title}</TableCell>
                    <TableCell className={classes.rowEl}>
                        <div className={classes.verticalAlign}>
                            <img alt="Blockchain icon" src={`${PUBLIC_URL}/icons/${selectIcon(row.blockchain)}.png`} className={classes.blockchainIcon} />
                            {row.blockchain}
                        </div>
                    </TableCell>
                    <TableCell className={classes.rowEl}>
                        <div className={classes.verticalAlign}>
                            <div className={clsx([selectWalletColor(row.type), classes.walletTypeIcon])}></div>
                            <span className={row.type === Markets.UNASSIGNED ? classes.labelDisabled : ''}>{row.type}</span>
                        </div>
                    </TableCell>
                    <TableCell className={classes.rowEl}><SwitchButton dashboaradSwitch={false} switchState={row.watched} handleChange={() => toggleSwitch(row, type)} /></TableCell>
                    <TableCell className={classes.rowEl}>
                        {/*<EditWalletModal id="1" address={row.walletHash} description={row.title} update={updateDescription} />*/}
                    </TableCell>
                </TableRow>
            ));
    }

    const classes = useWalletsListTableStyles();

    return (
        <View>
            <Grid container className="Container">

                <Grid item xs={1} className={classes.privateWallets}>
                    <Grid container justify="center">
                        <Grid item className={switchWallet === 'public' ? classes.btnDisabled : ''} onClick={() => setSwitchWallet(WalletType.PRIVATE)}>
                            Favorite wallet
                        </Grid>
                        {switchWallet === WalletType.PRIVATE && <Grid item className={classes.underline} />}
                    </Grid>
                </Grid>
                <Grid item xs={1} className={classes.publicWallets}>
                    <Grid container justify="center" >
                        <Grid item onClick={() => setSwitchWallet(WalletType.PUBLIC)} className={switchWallet === WalletType.PRIVATE ? classes.btnDisabled : ''}>
                            Public wallet
                        </Grid>
                        {switchWallet === 'public' && <Grid item className={classes.underline} />}
                    </Grid>
                </Grid>
                <Grid container spacing={9} className="Container">
                    <Grid item xs={12} lg={12} >
                        <Table>
                            <TableHead >
                                <TableRow>{renderWalletsListHeader(headerCols)}</TableRow>
                            </TableHead>
                            <TableBody
                                id="walletsListTableBody"
                            >
                                {switchWallet === WalletType.PRIVATE ? renderWalletsListRows(userList, 'user') : renderWalletsListRows(publicList, 'public')}</TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Grid>

        </View>
    );
};

export default WalletsList;
