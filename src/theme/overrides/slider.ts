import { DECOR_COLOR, SECONDARY_BG_COLOR } from '../constants';

export const MuiSlider = {
  root: {
    color: SECONDARY_BG_COLOR,
    height: 5,
    width: '90%',
    padding: '6px 0',
    display: 'block',
    margin: '0 auto'
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
    height: 5,
    borderRadius: 4,
  },

  rail: {
    height: 5,
    borderRadius: 4,
  }
}
