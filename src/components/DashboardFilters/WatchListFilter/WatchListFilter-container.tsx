import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button';

import SwitchButton from '../../SwitchButton';
import EditWalletModalStyles from '../../EditWalletModal/EditWalletModal-styles';
import { useWatchListFilterStyles } from './WatchListFilter-styles';

const WatchListFilter = () => {
  const classes = EditWalletModalStyles();
  const classesEditWalletButton = clsx([classes.editButton, classes.fonts, classes.grey, classes.background]);
  const { PUBLIC_URL } = process.env;

  const [list, setList] = React.useState(' ');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setList(event.target.value as string);
  };

  const classesWatchListFilter = useWatchListFilterStyles();

  return (
    <Grid container>
      <Grid container justify="flex-start" alignItems="flex-start" className={classesWatchListFilter.container}>
        <Grid item xs={10}>
          <p className={classesWatchListFilter.paragraph}>Show watched only</p>
        </Grid>
        <Grid item xs={1}>
          <SwitchButton dashboaradSwitch={false} switchState={true} handleChange={() => console.log('switch')} />
        </Grid>
      </Grid>
      <Grid container justify="flex-start" alignItems="flex-start" className="Container">
        <Grid item xs={8}>
          <FormControl >
            <Select
              className={classesWatchListFilter.select}
              id="list-select"
              value={list}
              onChange={handleChange}
            >
              <MenuItem className={classesWatchListFilter.listItems} value="public">Public List</MenuItem>
              <MenuItem className={classesWatchListFilter.listItems} value="private">My List</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} className={classesWatchListFilter.button}>
          <Link to={'/wallets-list'}>
            <Button
              variant="outlined"
              color="inherit"
              className={classesEditWalletButton}
            ><img src={`${PUBLIC_URL}/icons/wallet.png`} style={{ width: '13px', marginRight: '5px' }} />
              edit
        </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default WatchListFilter;
