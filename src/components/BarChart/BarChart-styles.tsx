import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

export const BarChartContainer = makeStyles((theme: ExtendedTheme) => ({
  root: {
    background: '#253152',
    color: theme.palette.grey[400],
    height: '21.67px',
    borderRadius: '2px',
    position: 'relative',
    lineHeight: '1.0625rem',
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '0.675rem',
    fontWeight: 'bold',
    fontStyle: 'normal'
  }
}));

export const useBarChartSegmentStyles = makeStyles((theme: ExtendedTheme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.grey[400],
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
  shadow: {
    background: 'rgba(0, 0, 0, .6)'
  }
}));
