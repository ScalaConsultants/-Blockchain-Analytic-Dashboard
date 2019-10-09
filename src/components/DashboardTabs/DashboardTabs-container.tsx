import React, { useState } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { useDashboardStyles } from './DashboardTabs-styles';

const DashboardTabs = () => {
  const classes = useDashboardStyles();

  const rootClasses = clsx([classes.fonts, classes.grey, classes.margin]);

  const tabsList = ['Buying', 'Selling', 'Data'];
  
  const [active, setActive] = useState(0);

  const onClick = (index: number) => setActive(index);

  const createTabs = () => tabsList.map((name, index) => {
    const underlineClasses = clsx([classes.underline], {
      [classes.active]: index === active
    });
    const tabClasses = clsx(classes.tab, {
      [classes.white]: index === active
    })
    return (
      <Grid 
        container 
        xs={4} 
        justify="center" 
        className={tabClasses}
        key={name}
        onClick={() => onClick(index)}
      >
        <Grid>{name}</Grid>
        <Grid className={underlineClasses}></Grid>
      </Grid>
    )
  });

  return (
    <Grid container className={rootClasses} spacing={2}>
      <Grid container justify="center" xs={3}>
        {createTabs()}
      </Grid>
      <Grid container xs={8} justify="flex-end">
        {/* TODO: import component */}
        Volume type:
      </Grid>
    </Grid>
  )
};

export default DashboardTabs;