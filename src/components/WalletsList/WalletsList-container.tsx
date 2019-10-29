import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { stableSort, getSorting } from "../../helpers/helpers";
import View from '../View';
import useWalletsListTableStyles from './WalletsList-styles';
import { walletsListFavourite } from './wallets';
import { walletsListPublic } from './wallets';
import EditWalletModal from '../EditWalletModal'
import SwitchButton from '../SwitchButton';

import { Markets, Blockchains } from '../../types';

const { PUBLIC_URL } = process.env;

const headerCols: any[] = [
    { id: 'id', numeric: false, disablePadding: false, label: 'ID', sort: true },
    { id: 'title', numeric: false, disablePadding: false, label: 'Title', sort: true },
    { id: 'blockchain', numeric: false, disablePadding: false, label: 'Blockchain', sort: true },
    { id: 'wallet_type', numeric: false, disablePadding: false, label: 'Wallet type', sort: true },
    { id: 'watched', numeric: false, disablePadding: false, label: 'Watched', sort: false },
    { id: 'edit', numeric: false, disablePadding: false, label: '', sort: false },


];

const WalletsList = (props: any): React.ReactElement => {
    type Order = "asc" | "desc";
    type OrderBy = string;

    const [switchWallet, setSwitchWallet] = React.useState('favourite');
    const [switchToggle, setSwitchToggle] = React.useState(false);
    const [description, setDescription] = React.useState('Test title');
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<OrderBy>("id");

    
    const handleRequestSort = (property: any) => {
        if (order === "desc") {
            setOrder("asc");
        } else if (order === "asc") {
            setOrder("desc");
        }
        setOrderBy(property);
    };

    const renderWalletsListHeader = (headerColumns: any[]) =>
        headerColumns.map((row: any) => (
            <TableCell
                key={`${row.id}${row.label}`}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
            > {row.sort ?
                <div style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }} onClick={()=>handleRequestSort(row.id)}>
                    <span className={row.id == 'watched' ? classes.labelDisabled : ''}>{row.label}</span>
                    {row.sort &&
                        <div>
                            <ArrowDropUpIcon
                                fontSize='small'
                                style={{ display: 'block', marginBottom: '-12px' }}
                            />

                            <ArrowDropDownIcon
                                fontSize='small'
                                style={{ display: 'block' }}
                            />

                        </div>
                    }
                </div>
                :
                <span className={row.id == 'watched' ? classes.labelDisabled : ''}>{row.label}</span>
            }

            </TableCell>
        ));

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

    const toggleSwitch = (index: number) => {
        setSwitchToggle(!switchToggle);
        if (switchWallet == 'favourite') {
            walletsListFavourite[index].watched = !walletsListFavourite[index].watched;
        } else {
            walletsListPublic[index].watched = !walletsListPublic[index].watched;

        }
    }

    const updateDescription = (value: string) => {
        setDescription(value);
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

    const renderWalletsListRows = (walletsList: any[]) => {
        if (!walletsList.length) return
        return (stableSort(
            walletsList,
            getSorting(order, orderBy)
        )).map((row: any, index: number) => (
            <TableRow key={`${index}`}>
                <TableCell scope="row"><b>{row.id}</b>&nbsp; &nbsp;<b style={{ color: '#4C5367' }}>{row.walletHash}</b></TableCell>
                <TableCell className={classes.rowEl}>{row.title}</TableCell>
                <TableCell className={classes.rowEl}>
                    <div className={classes.verticalAlign}>
                        <img src={`${PUBLIC_URL}/icons/${selectIcon(row.blockchain)}.png`} style={{ width: '15px', marginRight: '5px' }} />
                        {row.blockchain}
                    </div>
                </TableCell>
                <TableCell className={classes.rowEl}>
                    <div className={classes.verticalAlign}>
                        <div className={selectWalletColor(row.market) + ' ' + classes.walletTypeIcon}></div>
                        <span className={row.market == Markets.UNASSIGNED ? classes.labelDisabled : ''}>{row.market}</span>
                    </div>
                </TableCell>
                <TableCell className={classes.rowEl}><SwitchButton dashboaradSwitch={false} switchState={row.watched} handleChange={() => toggleSwitch(index)} /></TableCell>
                <TableCell className={classes.rowEl}>
                    <EditWalletModal id="1" address={row.walletHash} description={row.title} update={updateDescription} />
                </TableCell>
            </TableRow>
        ));
    }

    const classes = useWalletsListTableStyles();

    return (
        <View>
            <Grid container className="Container">

                <Grid item xs={1} style={{ marginRight: '20px', zIndex: 1000, cursor: 'pointer' }}>
                    <Grid container justify="center">
                        <Grid item className={switchWallet == 'public' ? classes.btnDisabled : ''} onClick={() => setSwitchWallet('favourite')}>
                            Favourite wallet
                        </Grid>
                        {switchWallet == 'favourite' && <Grid item className={classes.underline} />}
                    </Grid>
                </Grid>
                <Grid item xs={1} style={{ zIndex: 1000, cursor: 'pointer' }}>
                    <Grid container justify="center" >
                        <Grid item onClick={() => setSwitchWallet('public')} className={switchWallet == 'favourite' ? classes.btnDisabled : ''}>
                            Public wallet
                        </Grid>
                        {switchWallet == 'public' && <Grid item className={classes.underline} />}
                    </Grid>
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
                            >
                                {switchWallet == 'favourite' ? renderWalletsListRows(walletsListFavourite) : renderWalletsListRows(walletsListPublic)}</TableBody>
                        </Table>
                        {/* <Loader isLoading={walletsIsFetching} fullPage={false} /> */}
                    </Grid>
                </Grid>
            </Grid>

        </View>
    );
};

export default WalletsList;
