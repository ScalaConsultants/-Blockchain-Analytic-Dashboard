import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoaderStyles from './Loader-styles';
import { LoaderProps } from './types';

const Loader = ({
                  fullPage,
                  loaderClass,
                  loaderContainerClass,
                  loaderSize
}: LoaderProps) => {

  const { container, root } = LoaderStyles(fullPage || false);

  return (
    <div className={ loaderContainerClass || container }>
      <CircularProgress
        className={ loaderClass || root }
        size={ loaderSize || 100 }
      />
    </div>
)};

export default Loader;
