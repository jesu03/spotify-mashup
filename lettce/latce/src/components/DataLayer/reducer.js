export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // token:
  //   "BQCBz02UKFmy3_7LSCwmWwA9AnQy1q3tkewexXBH3lv-L6mYKhFznfn-cV2x_6MnIHVfSdR8maIPH7LJ9rvFfaUBmP61Y6e86465YHUedHfkIt4P3noF1z9KGrhQ3t6NEAzijYwSOgx_XkkcemIZCHGLCREw3PPeLACydLJgwE71_6P2",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
