import React, { useEffect } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { withFirebaseHOC } from "../../firebase";
import LoadingScreen from "../LoadingView";
// import ProductDetails from "../../components/productDetails/ProductDetails";
import { setAppLoading } from "../../store/actions/appActions";
import { checkUserAuthentication } from "./checkUserAuthentication";
import { renderMainDrawer } from "./renderMainDrawer";
import { renderLoginDrawer } from "./renderLoginDrawer";

const NavigationView = (props) => {
  const { firebase } = props;
  const dispatch = useDispatch();

  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  let isUserLoggedIn = false;

  let isAppLoading = useSelector((state) => state.app.isAppLoading);
  const isEmailVerified = useSelector((state) => state.auth.isEmailVerified);

  useEffect(() => {
    if (isEmailVerified) {
      checkUserAuthentication();
    } else {
      dispatch(setAppLoading(false));
    }
  }, [isUserLoggedIn, isAppLoading]);

  isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  checkUserAuthentication(props, dispatch);

  if (isAppLoading) {
    return (
      <>
        <LoadingScreen></LoadingScreen>
      </>
    );
  }

  return (
    <NavigationContainer>
      {isUserLoggedIn ? (
        <>{renderMainDrawer(firebase)}</>
      ) : (
        <>{renderLoginDrawer()}</>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default withFirebaseHOC(NavigationView);
