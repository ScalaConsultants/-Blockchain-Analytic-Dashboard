import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import View from '../View';
import useWalletsListTableStyles from './WalletsList-styles';
import { walletsListFavourite } from './wallets';
import { walletsListPublic } from './wallets';
import EditWalletModal from '../EditWalletModal'

import SwitchButton from '../SwitchButton';

const { PUBLIC_URL } = process.env;

const headerCols: any[] = [
    { id: 'id', numeric: false, disablePadding: false, label: 'ID' },
    { id: 'title', numeric: false, disablePadding: false, label: 'Title' },
    { id: 'blockchain', numeric: false, disablePadding: false, label: 'Blockchain' },
    { id: 'wallet_type', numeric: false, disablePadding: false, label: 'Wallet type' },
    { id: 'watched', numeric: false, disablePadding: false, label: 'Watched' },
    { id: 'edit', numeric: false, disablePadding: false, label: '' },


];

const WalletsList = (props: any): React.ReactElement => {
    const [switchWallet, setSwitchWallet] = React.useState('favourite');
    const [switchToggle, setSwitchToggle] = React.useState(false);
    const [description, setDescription] = React.useState('Test title');

    const renderWalletsListHeader = (headerColumns: any[]) =>
        headerColumns.map((row: any) => (
            <TableCell
                key={`${row.id}${row.label}`}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}

            >
                <span className={row.id=='watched' ? classes.labelDisabled : ''}>{row.label}</span>
            </TableCell>
        ));

    const selectIcon = (blockchain: string) => {
        switch (blockchain) {
            case 'Tezos':
                return 'tezos';
            case 'Ethereum':
                return 'eth';
            default:
                return 'eth'
        }
    }

    const toggleSwitch = (index:number) => {
        setSwitchToggle(!switchToggle);
        if(switchWallet == 'favourite') {
            walletsListFavourite[index].watched = !walletsListFavourite[index].watched;
        } else {
            walletsListPublic[index].watched = !walletsListPublic[index].watched;

        }
    }

    const updateDescription = (value:string) => {
        setDescription(value);
    }

    const selectWalletColor = (market: string) => {
        switch (market) {
            case 'Market':
                return classes.marketColor;
            case 'Private':
                return classes.privateColor;
            case 'DAPP':
                return classes.dappColor;
            case 'Fraud':
                return classes.fraudColor;
            case 'Unassigned':
                return classes.unassignedColor;
            default:
                return classes.marketColor
        }
    }

    const renderWalletsListRows = (walletsList: any[]) => {
        if (!walletsList.length) return
        return walletsList.map((row: any, index: number) => (
            <TableRow key={`${index}`}>
                <TableCell scope="row"><b>{row.ID}</b>&nbsp; &nbsp;<b style={{ color: '#4C5367' }}>{row.walletHash}</b></TableCell>
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
                        {row.market}
                    </div>
                </TableCell>
                <TableCell className={classes.rowEl}><SwitchButton dashboaradSwitch={false} switchState={row.watched} handleChange={()=>toggleSwitch(index)}/></TableCell>
                <TableCell className={classes.rowEl}>
                    <EditWalletModal id="1" address={row.walletHash} description={row.title} update={updateDescription}/>
                </TableCell>
            </TableRow>
        ));
    }

    const classes = useWalletsListTableStyles();

    return (
        <View>
            <Grid container className="Container">

                <Grid item xs={1} style={{marginRight:'20px',zIndex:1000, cursor:'pointer'}}>
                    <Grid container justify="center">
                        <Grid item className={switchWallet == 'public' ? classes.btnDisabled : ''} onClick={() => setSwitchWallet('favourite')}>
                            Favourite wallet
                        </Grid>
                        {switchWallet == 'favourite' && <Grid item className={classes.underline} />}
                    </Grid>
                </Grid>
                <Grid item xs={1} style={{zIndex:1000, cursor:'pointer'}}>
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
