import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

const ChartDescriptionStyles = makeStyles((theme: ExtendedTheme) => ({
  root: {
    width: '115px',
    height: '18px',
    textAlign: 'right',
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
    fontSize: '0.75rem',
    lineHeight: '0.75rem',

  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: theme.constants.MARKET_COLOR
  },
  type: {
    color: theme.palette.grey[400],
    '&::first-letter': {
      textTransform: 'uppercase'
    }
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
  }
}));

export default ChartDescriptionStyles;
