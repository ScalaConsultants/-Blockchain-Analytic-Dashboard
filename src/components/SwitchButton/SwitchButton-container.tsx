import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import UseSwitchButton from './SwitchButton-styles';

const SwitchButton = () => {
  const [state, setState] = React.useState({
    checkedPercenge: true,
  });

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>$</Grid>
          <Grid item>
            <UseSwitchButton
              checked={state.checkedPercenge}
              onChange={handleChange('checkedPercenge')}
              value="checkedPercenge"
            />
          </Grid>
          <Grid item>%</Grid>
        </Grid>
      </Typography>
  );
}

export default SwitchButton;