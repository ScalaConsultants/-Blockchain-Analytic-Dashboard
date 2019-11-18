const TOGGLE_WATCHED_LIST = 'TOGGLE_WATCHED_LIST';

const initState = false;

export default (state = initState, action: any) => {
  switch (action.type) {
    case TOGGLE_WATCHED_LIST:
      return !state;
    default:
      return state;
  }
};

