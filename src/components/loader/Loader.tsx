import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoaderDefaultStyles from './Loader-styles';
import { LoaderProps } from './types';

const Loader = ({
                  isLoading,
                  fullPage,
                  loaderClass,
                  loaderContainerClass,
                  loaderSize
}: LoaderProps) => {

  const { container, root } = LoaderDefaultStyles(fullPage || false);

  return (
    <>
      {
        isLoading ? (
          <div className={ loaderContainerClass || container }>
            <CircularProgress
              className={ loaderClass || root }
              disableShrink
              size={ loaderSize || 100 }
            />
          </div>
        ) :
          null
      }
    </>
)};

export default Loader;
