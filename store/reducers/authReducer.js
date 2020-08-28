
import { CHECK_USER_AUTH,
         SET_EMAIL_VERIFICATION } from "../actions/authAction";

const initialState = {
  isLoggedIn: false,
  isEmailVerified:false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_AUTH:
      state.isLoggedIn = action.isLoggedIn;
      return state;
    case SET_EMAIL_VERIFICATION:
      state.isEmailVerified = action.verified;
      return state;
    default:
      return state;
  }
};
