// default theme to override https://material-ui.com/customization/default-theme/

import { createMuiTheme } from '@material-ui/core';
import overrides from './overrides';
import typography from './typography';
import palette from './palette';
import * as constants from './constants';

const theme = createMuiTheme({
  overrides,
  typography,
  palette
});

export default { ...theme, constants } ;