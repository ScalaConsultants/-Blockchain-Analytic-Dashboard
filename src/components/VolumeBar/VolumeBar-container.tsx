import React, { useEffect } from 'react';
import volumeBarStyles from './VolumeBar-style';

const VolumeBar = (props: any): React.ReactElement => {
    const classes = volumeBarStyles();

    const timestamp = new Date().getTime();

    useEffect((): void => {
        const currencyTezos = props.actions.getCurrencyByDatasource(timestamp, 'XTZ');
        const currencyEthereum = props.actions.getCurrencyByDatasource(timestamp, 'ETH');
        console.log(currencyTezos, currencyEthereum);
       }, []);
    


    return (
        <>
            <div className={classes.containerOutside}>
                <div className={classes.containerInside}>
                    <div className={classes.totalVolume}>total volume</div>
                    <div className={classes.blokchain}>25,94011 ETH</div>
                </div>
            </div>
        </>
    );
};

export default VolumeBar;
