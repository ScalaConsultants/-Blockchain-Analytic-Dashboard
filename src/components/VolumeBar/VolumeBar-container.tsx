import React, { useEffect } from 'react';
import volumeBarStyles from './VolumeBar-style';

const VolumeBar = (props: any): React.ReactElement => {
    const classes = volumeBarStyles();
    console.log(props);

    const timestamp = new Date();


    useEffect((): void => {
        props.actions.getCurrencyByDatasource(1575542946846);
        console.log(props);
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
