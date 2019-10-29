import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

export const useBarChartContainer = makeStyles((theme: ExtendedTheme) => ({
  root: {
    background: theme.constants.BG_COLOR,
    color: theme.palette.grey[400],
    height: '100%',
    borderRadius: '2px',
    position: 'relative',
    lineHeight: '1.0625rem',
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '0.675rem',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  loader: {
    padding: 0
  }
}));

export const useBarChartSegmentStyles = makeStyles((theme: ExtendedTheme) => ({
  color: {
    color: theme.palette.common.white,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSize: {
    width: '100%',
    height: '100%'
  },
  active: {
    boxShadow: '0px 0px 20px rgba(135, 101, 239, .8)',
    borderRadius: '2px',
    zIndex: 100,
    transform: 'scale(1.3)',
    color: theme.palette.common.white
  },
  firstInactive: {
    borderRadius: '2px 0px 0px 2px'
  },
  market: {
    background: theme.constants.MARKET_COLOR
  },
  private: {
    background: theme.constants.PRIVATE_COLOR
  },
  dapp: {
    background: theme.constants.DAPP_COLOR
  },
  fraud: {
    background: theme.constants.FRAUD_COLOR
  },
  rest: {
    background: theme.constants.REST_COLOR
  },
  shadow: {
    background: 'rgba(0, 0, 0, .6)'
  }
}));
