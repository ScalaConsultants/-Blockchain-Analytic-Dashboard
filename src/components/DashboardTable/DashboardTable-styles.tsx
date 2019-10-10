import { makeStyles } from '@material-ui/styles';
import { ExtendedTheme } from '../../types';

export const useDashboardTableStyles = makeStyles((theme: ExtendedTheme) => ({
  color: {
    color: theme.palette.common.white
  }
}));