import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

 export const useFiltersStyles: any = makeStyles((theme: ExtendedTheme) => ({
  button: {
    color: theme.constants.GREY_TEXT_COLOR,
    background: theme.constants.SECONDARY_BG_COLOR,
    borderRadius: '4px',
    borderColor: theme.constants.SECONDARY_BG_COLOR,
    minWidth: '38px',
    height: '23px',
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
    fontSize: '0.65rem',
    lineHeight: theme.constants.DEFAULT_LINE_HEIGHT,
    margin: '4px',

    '&:hover': useFiltersStyles.active
  },

  active: {
    color: theme.palette.common.white,
    background: theme.constants.DECOR_COLOR
  },

  refresh: {
    color: '#597CFD'
  }
}));
