import React from 'react';
import { useViewStyles } from './View-styles';
 
const View = ({ children }: any) => {
  const classes = useViewStyles();
  return <div className={classes.root}>{children}</div>
}

export default View;