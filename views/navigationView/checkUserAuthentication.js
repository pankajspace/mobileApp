import {
  checkUserAuth,
  setEmailVerification,
} from "../../store/actions/authAction";
import { setAppLoading } from "../../store/actions/appActions";

export const checkUserAuthentication = async (props, dispatch) => {
  await props.firebase.checkUserAuth((user) => {
    if (user) {
      var thisUser = props.firebase.currentUser();
      if (!thisUser.emailVerified) {
        alert(
          "Please verify your account by clicking on the link in the email sent to your registered email address."
        );
        props.firebase.signOut();
        dispatch(setEmailVerification(false));
        return;
      }
      // if the user has previously logged in
      dispatch(setAppLoading(false));
      dispatch(checkUserAuth(true));
    } else {
      // if the user has previously signed out from the app
      dispatch(checkUserAuth(false));
      dispatch(setAppLoading(false));
    }
  });
};
