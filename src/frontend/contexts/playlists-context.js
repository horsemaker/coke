import { createContext, useContext, useReducer, useEffect } from "react";
import { SET_PLAYLISTS } from "../constants";
import { playlistsReducer } from "../reducers";
import { getPlaylistsService } from "../services";
import { useAuth } from "./auth-context";

const PlaylistsContext = createContext();

const PlaylistsProvider = ({ children }) => {
  const [playlists, dispatchPlaylists] = useReducer(playlistsReducer, []);

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      (async () => {
        const getPlaylistsResponse = await getPlaylistsService(auth.token);
        if (getPlaylistsResponse !== undefined) {
          dispatchPlaylists({
            type: SET_PLAYLISTS,
            payload: getPlaylistsResponse,
          });
        }
      })();
    } else {
      dispatchPlaylists({ type: SET_PLAYLISTS, payload: [] });
    }
  }, [auth]);

  return (
    <PlaylistsContext.Provider value={{ playlists, dispatchPlaylists }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => {
  const context = useContext(PlaylistsContext);

  if (context === undefined) {
    throw new Error("usePlaylists must be used within a PlaylistsProvider");
  }

  return context;
};

export { PlaylistsProvider, usePlaylists };
