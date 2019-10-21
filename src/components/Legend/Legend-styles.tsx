import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

export const LegendContainer = makeStyles((theme: ExtendedTheme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '15px',
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
    fontSize: '0.75rem'
  },
  title: {
    color: '#4C5367',
    lineHeight: '0.75rem',
    fontSize: 'inherit',
    margin: 0,
    padding: 0
  }
}));

export const LegendList = makeStyles((theme: ExtendedTheme) => ({
  root: {
    listStyle: 'none',
    display: 'flex',
    color: theme.palette.grey[400],
    margin: 0,
    padding: 0
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '0.75rem',
    marginLeft: '30px',
    '&:first-child': {
      marginLeft: '18px'
    },
    '&::before': {
      /* eslint-disable-next-line quotes */
      content: "''",
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      marginRight: '10px'
    },
    '&:nth-child(1)::before': {
      background: theme.constants.MARKET_COLOR
    },
    '&:nth-child(2)::before': {
      background: theme.constants.PRIVATE_COLOR
    },
    '&:nth-child(3)::before': {
      background: theme.constants.DAPP_COLOR
    },
    '&:nth-child(4)::before': {
      background: theme.constants.FRAUD_COLOR
    },
    '&:nth-child(5)::before': {
      background: theme.constants.REST_COLOR
    }
  }
}));
