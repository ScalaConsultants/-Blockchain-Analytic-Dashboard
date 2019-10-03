import React from 'react';
import { LegendList } from './Legend-styles';

const LegendView = () => {
  const list = ['Market', 'Private', 'DAAP', 'Fraud'];  
  const classes = LegendList();

  const items = list.map(item => (
    <li className={classes.item} key={item}>
      <div>{item}</div>
    </li>
  ));

  return (
    <ul className={classes.root}>
      {items}
    </ul>
  );
}

export default LegendView;