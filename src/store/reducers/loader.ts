import { LOADER_STATE } from "../actions/loader";

const initState = false;

export default (state = initState, action: any): any => {
  switch (action.type) {
    case LOADER_STATE:
      return action.show;
    default:
      return state;
  }
};
