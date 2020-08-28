export const CHECK_USER_AUTH = "CHECK_USER_AUTH";
export const SET_EMAIL_VERIFICATION = "SET_EMAIL_VERIFICATION";


export const checkUserAuth = (loggedIn) => {
  return { type: CHECK_USER_AUTH, isLoggedIn: loggedIn };
};
export const setEmailVerification = (verified) => {
  return { type: SET_EMAIL_VERIFICATION, verified: verified };
};

