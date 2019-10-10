import { makeStyles } from '@material-ui/styles';
import { ExtendedTheme } from '../../types';

export const useDashboardTableStyles = makeStyles((theme: ExtendedTheme) => ({
  fonts: {
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
    lineHeight: theme.constants.DEFAULT_LINE_HEIGHT,
    fontSize: '0.75rem'
  },
  white: {
    color: theme.palette.common.white
  },
  grey: {
    color: theme.palette.grey[400]
  },
  img: {
    width: '30px',
    height: '30px'
  },
  dot: {
    width: '12px',
    height: '12px',
    background: 'radial-gradient(50% 1368.05% at 50% 48.72%, #78CC33 0%, #BEE32D 100%)',
    borderRadius: '50%'
  },
  header: {
    borderBottom: '2px solid #253152',
    paddingBottom: '5px'
  }
}));