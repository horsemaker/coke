import { CATEGORY } from "../constants";

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
