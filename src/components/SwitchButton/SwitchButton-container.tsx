import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import {switchStyles} from './SwitchButton-styles';

const SwitchButton = () => {

  const [switchState, setSwitchState] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSwitchState(event.target.checked);

  const DashboardSwitch = withStyles(switchStyles)(Switch);

  return (
    <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>$</Grid>
          <Grid item>
            <DashboardSwitch
              checked={switchState}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>%</Grid>
        </Grid>
      </Typography>
  );
}

export default SwitchButton;
