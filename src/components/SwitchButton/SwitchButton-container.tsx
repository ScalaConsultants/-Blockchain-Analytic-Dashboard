import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import {dashboardSwitchStyles, WojtekSwitchStyles} from './SwitchButton-styles';

const SwitchButton = (props: any) => {

  const SwitchStyle = props.dashboaradSwitch ? withStyles(dashboardSwitchStyles)(Switch) :  withStyles(WojtekSwitchStyles)(Switch);

  return (
    <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>{props.labelLeft}</Grid>
          <Grid item>
            <SwitchStyle
              checked={props.switchState}
              onChange={props.handleChange}
            />
          </Grid>
          <Grid item>{props.labelRight}</Grid>
        </Grid>
      </Typography>
  );
}

export default SwitchButton;
