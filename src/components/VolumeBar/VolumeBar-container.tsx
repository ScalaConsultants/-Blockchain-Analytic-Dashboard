import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import volumeBarStyles from './VolumeBar-style';

const VolumeBar = (props: any): React.ReactElement => {
    const classes = volumeBarStyles();

    const timestamp: number = props.match.params.from - 6000;

    const { actions, currency, walletSource } = props

    useEffect((): void => actions.getCurrencyByDatasource(timestamp), [props.match.params.from]);

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

export default withRouter(VolumeBar);
