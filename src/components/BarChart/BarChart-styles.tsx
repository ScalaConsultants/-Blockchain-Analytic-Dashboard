import { makeStyles, Theme } from '@material-ui/core/styles';

export const BarChartContainer = makeStyles((theme: Theme) => ({
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

export const BarChartSegment = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.grey[400],
  },
  active: {
    boxShadow: '0px 0px 20px rgba(135, 101, 239, 0.4)',
    borderRadius: '2px',
    zIndex: 100,
    transform: 'scale(1.05)',
    color: theme.palette.common.white
  },
  firstInactive: {
    borderRadius: '2px 0px 0px 2px'
  },
  market: {
    background: 'linear-gradient(90deg, #6B5EE9 0%, #8765EF 100%)'
  },
  private: {
    background: 'linear-gradient(90deg, #5975FF 0%, #569AF5 100%)'
  },
  daap: {
    background: 'linear-gradient(90deg, #74798C 0%, #A9B0CC 100%)'
  },
  fraud: {
    background: 'linear-gradient(90deg, #2A2D3A 0%, #34363F 100%)'
  }
}));