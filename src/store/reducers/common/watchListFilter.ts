const TOGGLE_WATCHED_ONLY = 'SHOW_WATCHED_ONLY';

const initState = false;

export default (state = initState, action: any) => {
  switch (action.type) {
    case TOGGLE_WATCHED_ONLY:
      return !state;
    default:
      return state;
  }
};
