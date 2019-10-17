import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

export const useTopBarStyles = makeStyles((theme: ExtendedTheme) => ({
  appBar: {
    background: theme.constants.PRIMARY_MAIN_COLOR,
    boxShadow: '0px 0px 25px rgba(28, 35, 58, 0.25)',
    height: '50px'
  },
  toolBar: {
    minHeight: '50px'
  },
  logo: {
    flexGrow: 1,
  },
  img: {
    width: '31px',
    height: '30px'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  }
}));