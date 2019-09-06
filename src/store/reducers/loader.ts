import { SHOW_LOADER, HIDE_LOADER } from "../actions/loader";

const initState = 0;

// Show loader when state > 0
export default (state = initState, action: any): any => {
  switch (action.type) {
    case SHOW_LOADER:
      return state + 1;
    case HIDE_LOADER:
      return state - 1;
    default:
      return state;
  }
};
