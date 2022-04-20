import { SET_HISTORY } from "../constants";

export const historyReducer = (state, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return action.payload;
    default:
      return state;
  }
};
