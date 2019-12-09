import { 
  CURRENCY_ON, 
  CURRENCY_OFF
} from '../../actions/common/currencySwitch';

const initState = false;

export default (state = initState, action: any) => {
  switch (action.type) {
    case CURRENCY_ON:
      return true;
    case CURRENCY_OFF:
      return false;
    default:
      return state;
  }
};

