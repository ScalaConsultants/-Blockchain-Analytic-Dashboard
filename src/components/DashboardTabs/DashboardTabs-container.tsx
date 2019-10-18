import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import DashboardTabsView from './DashboardTabs-view';
import { useDashboardStyles } from './DashboardTabs-styles';

const DashboardTabs = (props: any) => {

  const { actions, match, history } = props;

  const classes = useDashboardStyles();

  const tabsList = ['buyer', 'seller', 'data'];

  const [active, setActive] = useState(tabsList.findIndex((name: string) => name === match.params.groupBy));

  const onClick = (index: number) => {
    setActive(index);
    
    history.replace(`/${tabsList[index]}/${match.params.blockchains}/${match.params.limit}/${match.params.from}/${match.params.to}/`);
  };

  const tabs = tabsList.map((name, index) => {
    const underlineClasses = clsx([classes.underline], {
      [classes.active]: index === active
    });
    const tabClasses = clsx([classes.tab, classes.padding], {
      [classes.white]: index === active
    });
    return (
      <Grid item xs={4} key={name}>
        <Grid container justify="center" className={tabClasses} onClick={() => onClick(index)}>
          <Grid item className={classes.name}>{name}</Grid>
          <Grid item className={underlineClasses} />
        </Grid>
      </Grid>
    );
  });

  return <DashboardTabsView tabs={tabs} />;
};

export default withRouter(DashboardTabs);
