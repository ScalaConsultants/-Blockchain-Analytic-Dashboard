const TOGGLE_WATCHED_ONLY = 'TOGGLE_WATCHED_ONLY';

const initState = false;

export default (state = initState, action: any) => {
  switch (action.type) {
    case TOGGLE_WATCHED_ONLY:
      return !state;
    default:
      return state;
  }
};
