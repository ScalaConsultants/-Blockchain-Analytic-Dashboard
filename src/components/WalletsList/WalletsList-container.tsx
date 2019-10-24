import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import View from '../View';

const WalletsList = (props: any): React.ReactElement => {

    return (
        <View>
            <Grid container className="Container">
                <Grid item xs={12} lg={12}>
                    <Typography variant="h2" gutterBottom>
                        Public wallets
                     </Typography>
                </Grid>
            </Grid>
        </View>
    );
};

export default WalletsList;
