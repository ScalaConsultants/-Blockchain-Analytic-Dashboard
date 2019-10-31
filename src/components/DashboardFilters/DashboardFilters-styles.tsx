import { makeStyles } from '@material-ui/core/styles';
import { SECONDARY_BG_COLOR, DECOR_COLOR } from '../../theme/constants';
import { ExtendedTheme } from '../../types';

 export const useFiltersStyles: any = makeStyles((theme: ExtendedTheme) => ({
  
  button: {
    color: '#A3A7B0',
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

export const TimePeriodStyles = {
  root: {
    color: SECONDARY_BG_COLOR,
    height: 5,
    width: '90%'
  },
  thumb: {
    height: 15,
    width: 15,
    background: DECOR_COLOR,
    border: '2px solid currentColor',
    marginTop: -4,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  }
}