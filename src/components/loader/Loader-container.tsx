import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useLoaderDefaultStyles from './Loader-styles';
import { LoaderProps } from './types';

const Loader = ({
  isLoading,
  fullPage,
  loaderClass,
  loaderContainerClass,
  loaderSize,
  containerClass
}: LoaderProps) => {
  const { containerAdditional, containerBase, root } = useLoaderDefaultStyles(fullPage, containerClass);

  return (
    <>
      {isLoading ? (
        <div className={`${containerBase} ${loaderContainerClass || containerAdditional}`}>
          <CircularProgress
            className={loaderClass || root}
            disableShrink
            size={loaderSize || 80}
          />
        </div>
      ) : null}
    </>
  );
};

export default Loader;
