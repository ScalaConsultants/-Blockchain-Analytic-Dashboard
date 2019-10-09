import { makeStyles } from '@material-ui/styles';

// @ts-ignore
const LoaderDefaultStyles = (fullPage: boolean) => {
  const positionTypeContainer = fullPage ? 'fixed' : 'absolute';
  const paddingContainer = fullPage ? 'none' : '50px';
  const createStyles = makeStyles(() => ({
    container: {
      alignItems: 'center',
      backgroundColor: 'rgba(37, 45, 72, 0.8)',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      padding: paddingContainer,
      position: positionTypeContainer,
      top: 0,
      width: '100%'
    },
    root: {
      color: '#78CC33',
      height: 80,
      width: 80
    }
  }));

  return createStyles();
};

export default LoaderDefaultStyles;
