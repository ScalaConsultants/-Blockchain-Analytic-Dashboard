import React from 'react';

const VolumeBar = (): React.ReactElement => {

    return (
        <>
            <div style={{ width: '100%', height: 12, background: '#253152', position: 'relative' }}>
                <div style={{ width: '50%', height: 12, background: 'linear-gradient(90deg, #74798C 0%, #A9B0CC 100%)', position: 'relative' }}>
                    <div style={{ float: 'left', color: '#A3A7B0', fontSize: 10, position: 'relative', zIndex: 1000, bottom: 3, left: 3 }}>total volume</div>
                    <div style={{ float: 'right', color: 'white', fontSize: 10, position: 'relative', zIndex: 1000, bottom: 3, right: 3 }}>25,94011 ETH</div>
                </div>
            </div>
        </>
    );
};

export default VolumeBar;
