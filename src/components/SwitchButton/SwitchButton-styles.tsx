import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const UseSwitchButton = withStyles({
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

export default UseSwitchButton;