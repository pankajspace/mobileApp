export const CHECK_USER_AUTH = "CHECK_USER_AUTH";

export const checkUserAuth = (loggedIn) => {
  return { type: CHECK_USER_AUTH, isLoggedIn: loggedIn };
};
