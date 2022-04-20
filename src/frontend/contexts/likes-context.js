import { createContext, useContext, useReducer, useEffect } from "react";
import { SET_LIKES } from "../constants";
import { likesReducer } from "../reducers";
import { getLikesService } from "../services";
import { useAuth } from "./auth-context";

const LikesContext = createContext();

const LikesProvider = ({ children }) => {
  const [likes, dispatchLikes] = useReducer(likesReducer, []);

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      (async () => {
        const getLikesResponse = await getLikesService(auth.token);
        if (getLikesResponse !== undefined) {
          dispatchLikes({ type: SET_LIKES, payload: getLikesResponse });
        }
      })();
    } else {
      dispatchLikes({ type: SET_LIKES, payload: [] });
    }
  }, [auth]);

  return (
    <LikesContext.Provider value={{ likes, dispatchLikes }}>
      {children}
    </LikesContext.Provider>
  );
};

const useLikes = () => {
  const context = useContext(LikesContext);

  if (context === undefined) {
    throw new Error("useLikes must be used within a LikesProvider");
  }

  return context;
};

export { LikesProvider, useLikes };
