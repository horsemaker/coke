import { SET_PLAYLISTS } from "../constants";

export const playlistsReducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYLISTS:
      return action.payload;
    default:
      return state;
  }
};
