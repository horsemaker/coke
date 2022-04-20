import { createContext, useContext, useReducer, useEffect } from "react";
import { SET_HISTORY } from "../constants";
import { historyReducer } from "../reducers";
import { getHistoryService } from "../services";
import { useAuth } from "./auth-context";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [history, dispatchHistory] = useReducer(historyReducer, []);

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      (async () => {
        const getHistoryResponse = await getHistoryService(auth.token);
        if (getHistoryResponse !== undefined) {
          dispatchHistory({ type: SET_HISTORY, payload: getHistoryResponse });
        }
      })();
    } else {
      dispatchHistory({ type: SET_HISTORY, payload: [] });
    }
  }, [auth]);

  return (
    <HistoryContext.Provider value={{ history, dispatchHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => {
  const context = useContext(HistoryContext);

  if (context === undefined) {
    throw new Error("useHistory must be used within a HistoryProvider");
  }

  return context;
};

export { HistoryProvider, useHistory };
