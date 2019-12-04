import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import EditWalletModal from '../EditWalletModal';
import ChartDescription from '../ChartDescription';
import DetailsMenuStyles from './DetailsMenu-styles';
import { ViewProps } from './types';
import ButtonBack from '../ButtonBack';
import useRules from '../hooks/Rules';

const DetailsMenu = (props: ViewProps) => {
  const {
    blockchain,
    blockchains,
    title,
    description,
    email,
    from,
    groupBy,
    id,
    limit,
    to,
    type,
    update,
    walletHash,
    zoom
  } = props;

  const { editOwnWallet } = useRules();

  const classes = DetailsMenuStyles();
  const classesRoot: string = clsx([classes.root, classes.fonts, classes.fontWeightBold]);
  const classesInfo: string = clsx([classes.margin, classes.white]);
  const classesFiltersInfo: string = clsx([classes.margin, classes.backgroundInfo]);

  return (
    <Grid container direction="row" alignItems="center" className={classesRoot}>
      <Grid item xs={1}>
        <ButtonBack customBackLink={`/${groupBy}/${blockchains}/${limit}/${from}/${to}`} />
      </Grid>
      <Grid item xs={8}>
        <Grid container alignItems="center" className={classesInfo}>
          <Grid item xs={2}>
            ID
          </Grid>
          <Grid item xs={10}>
            {id}
          </Grid>
        </Grid>
        <Grid container alignItems="center" className={classes.grey}>
          <Grid item xs={2}>
            Address
          </Grid>
          <Grid item xs={10}>
            {walletHash}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <EditWalletModal
          address={walletHash}
          blockchain={blockchain}
          title={title}
          description={description}
          email={email}
          id={id}
          type={type}
          update={update}
          canEdit={editOwnWallet}
        />
      </Grid>
      <Grid item xs={1}>
        <ChartDescription type={type} />
      </Grid>
      <Grid container direction="row" justify="flex-end" alignItems="center" className={classesFiltersInfo}>
        <Grid item xs={2}>
          Active filters:
        </Grid>
        <Grid item xs={2}>
          {`Blockchain: ${blockchain}`}
        </Grid>
        <Grid item xs={2} className={classes.firstLetterUppercase}>
          {`Group by: ${groupBy}`}
        </Grid>
        <Grid item xs={2}>
          {`Zoom: ${zoom}`}
        </Grid>
        <Grid item xs={2}>
          {`Top: ${limit}`}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsMenu;
