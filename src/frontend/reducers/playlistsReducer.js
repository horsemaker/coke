import { SET_PLAYLIST, SET_PLAYLISTS } from "../constants";

export const playlistsReducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYLISTS:
      return action.payload;
    case SET_PLAYLIST:
      return state.map((playlist) =>
        playlist._id === action.payload._id ? action.payload : playlist
      );
    default:
      return state;
  }
};
