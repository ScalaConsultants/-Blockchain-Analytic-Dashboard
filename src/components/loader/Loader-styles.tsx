import { makeStyles } from '@material-ui/styles';

// @ts-ignore
const useLoaderDefaultStyles = (fullPage: boolean) => {
  const positionTypeContainer = fullPage ? 'fixed' : 'absolute';
  const paddingContainer = fullPage ? 'none' : '50px';
  const createStyles = makeStyles(() => ({
    containerBase: {
      alignItems: 'center',
      backgroundColor: 'rgba(37, 45, 72, 0.8)',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      position: positionTypeContainer,
      top: 0,
      width: '100%'
    },

    containerAdditional: {
      padding: paddingContainer
    },

    root: {
      color: 'rgba(120, 204, 51, .5)'
    }
  }));

  return createStyles();
};

export default useLoaderDefaultStyles;
