import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

const useButtonBackStyles = makeStyles((theme: ExtendedTheme) => ({
  back: {
    textTransform: 'none',
    color: theme.palette.grey[400]
  }
}));

export default useButtonBackStyles;
