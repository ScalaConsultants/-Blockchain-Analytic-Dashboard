import React, { useEffect } from 'react';
import volumeBarStyles from './VolumeBar-style';

const VolumeBar = (props: any): React.ReactElement => {
    const classes = volumeBarStyles();

    const timestamp = new Date().getTime();

    useEffect((): void => props.actions.getCurrencyByDatasource(timestamp), []);

    console.log(props.currency);

    return (
        <>
            <div className={classes.containerOutside}>
                <div className={classes.containerInside}>
                    <div className={classes.totalVolume}>total volume</div>
                    <div className={classes.blokchain}>{props.currency} {props.walletSource}</div>
                </div>
            </div>
        </>
    );
};

export default VolumeBar;
