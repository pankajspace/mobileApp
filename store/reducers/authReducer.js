
import { CHECK_USER_AUTH } from "../actions/authAction";

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_AUTH:
      state.isLoggedIn = action.isLoggedIn;
      return state;
    default:
      return state;
  }
};
