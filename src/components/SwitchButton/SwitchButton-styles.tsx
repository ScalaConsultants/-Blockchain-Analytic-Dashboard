import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const DashboardSwitchButtonStyles = withStyles({
  switchBase: {
    color:  '#9EE32D',
    '&$checked': {
      color:  '#9EE32D'
    },
    '&$checked + $track': {
      background:'#253152'
    },
  },
  checked: {},
  track: {},
})(Switch);

export default DashboardSwitchButtonStyles;