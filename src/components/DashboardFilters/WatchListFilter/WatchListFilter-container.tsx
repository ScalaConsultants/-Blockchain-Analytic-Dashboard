import React from 'react';
import { MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid/Grid';

import SwitchButton from '../../SwitchButton';
import EditWalletModal from '../../EditWalletModal';

const WatchListFilter = () => {

  return (
    <Grid container>
      <Grid container justify="flex-start" alignItems="flex-start" className="Container">
        <Grid item xs={10}>
          Show watched only
          </Grid>
        <Grid item xs={1}>
          <SwitchButton dashboaradSwitch={false} switchState={true} handleChange={() => console.log('switch')} />
        </Grid>
      </Grid>
      <Grid container justify="flex-start" alignItems="flex-start" className="Container">
        <Grid item xs={8}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select>
              <MenuItem value={1}>Public List</MenuItem>
              <MenuItem value={2}>My List</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <EditWalletModal id={"1"} address={"1"} description={"1"} update={() => (console.log('e'))} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default WatchListFilter;
