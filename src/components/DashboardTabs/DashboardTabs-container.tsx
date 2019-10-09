import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import DashboardTabsView from './DashboardTabs-view';
import { useDashboardStyles } from './DashboardTabs-styles';

const DashboardTabs = () => {
  const classes = useDashboardStyles();

  const tabsList = ['Buying', 'Selling', 'Data'];
  
  const [active, setActive] = useState(0);

  const onClick = (index: number) => setActive(index);

  const tabs = tabsList.map((name, index) => {
    const underlineClasses = clsx([classes.underline], {
      [classes.active]: index === active
    });
    const tabClasses = clsx(classes.tab, {
      [classes.white]: index === active
    })
    return (
      <Grid 
        item xs={4}
        key={name}
      >
        <Grid
          container
          justify="center"
          className={tabClasses}
          onClick={() => onClick(index)}
        >
          <Grid item>{name}</Grid>
          <Grid item className={underlineClasses}></Grid>
        </Grid>
      </Grid>
    )
  });

  return <DashboardTabsView tabs={tabs}/>
};

export default DashboardTabs;