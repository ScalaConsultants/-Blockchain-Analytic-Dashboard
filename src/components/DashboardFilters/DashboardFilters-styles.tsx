import { makeStyles } from '@material-ui/core/styles';
import { SECONDARY_BG_COLOR } from '../../theme/constants';
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
    background: 'linear-gradient(90deg, #78CC33 4.76%, #9EE32D 100%)'
  },

  refresh: {
    color: '#597CFD'
  }

}));

export const TimePeriodStyles = {
  root: {
    color: SECONDARY_BG_COLOR,
    height: 5,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
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