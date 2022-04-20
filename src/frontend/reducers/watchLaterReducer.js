import { SET_WATCH_LATER } from "../constants";

export const watchLaterReducer = (state, action) => {
  switch (action.type) {
    case SET_WATCH_LATER:
      return action.payload;
    default:
      return state;
  }
};
