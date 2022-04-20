import { createContext, useContext, useReducer, useEffect } from "react";
import { SET_WATCH_LATER } from "../constants";
import { watchLaterReducer } from "../reducers";
import { getWatchLaterService } from "../services";
import { useAuth } from "./auth-context";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLater, dispatchWatchLater] = useReducer(watchLaterReducer, []);

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      (async () => {
        const getWatchLaterResponse = await getWatchLaterService(auth.token);
        if (getWatchLaterResponse !== undefined) {
          dispatchWatchLater({
            type: SET_WATCH_LATER,
            payload: getWatchLaterResponse,
          });
        }
      })();
    } else {
      dispatchWatchLater({ type: SET_WATCH_LATER, payload: [] });
    }
  }, [auth]);

  return (
    <WatchLaterContext.Provider value={{ watchLater, dispatchWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => {
  const context = useContext(WatchLaterContext);

  if (context === undefined) {
    throw new Error("useWatchLater must be used within a WatchLaterProvider");
  }

  return context;
};

export { WatchLaterProvider, useWatchLater };
