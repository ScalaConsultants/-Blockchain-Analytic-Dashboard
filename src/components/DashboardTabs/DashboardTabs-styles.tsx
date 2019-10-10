import { makeStyles } from '@material-ui/styles';
import { ExtendedTheme } from '../../types';

export const useDashboardStyles = makeStyles((theme: ExtendedTheme) => ({
  grey: {
    color: theme.palette.grey[400]
  },
  white: {
    color: theme.palette.common.white
  },
  fonts: {
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontSize: theme.constants.DEFAULT_FONT_SIZE,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
    lineHeight: theme.constants.DEFAULT_LINE_HEIGHT
  },
  underline: {
    width: '100%',
    height: '2px',
    background: 'transparent'
  },
  active: {
    background: 'linear-gradient(90deg, #78CC33 0%, #9EE32D 100%)'
  },
  tab: {
    marginRight: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    '&:hover': {
      color: theme.palette.common.white,
      '& div:nth-child(2)': {
        background: 'linear-gradient(90deg, #78CC33 0%, #9EE32D 100%)'
      }
    }
  },
  margin: {
    margin: '15px 0'
  },
  padding: {
    padding: '0 30px 0 0'
  }
}));
