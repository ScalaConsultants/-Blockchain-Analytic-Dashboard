import React, { useEffect } from 'react';
import volumeBarStyles from './VolumeBar-style';

const VolumeBar = (props: any): React.ReactElement => {
    const classes = volumeBarStyles();

    const timestamp: number = new Date().getTime() - 6000;

    const { actions, currency, walletSource } = props

    useEffect((): void => actions.getCurrencyByDatasource(timestamp), []);

    const label = `${Number.parseFloat(currency).toFixed(2)} ${walletSource}`;

    return (
        <>
            <div className={classes.containerOutside}>
                <div className={classes.containerInside} style={walletSource === 'ETH'? {width: '100%'} : {width: '20%'}}>
                    <div className={classes.totalVolume}>total volume</div>
                    <div className={classes.blokchain}>{label}</div>
                </div>
            </div>
        </>
    );
};

export default VolumeBar;
