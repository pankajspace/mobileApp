import React, { useEffect } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { withFirebaseHOC } from "../firebase";
import CustomerView from "../views/CustomerView";
import AdminView from "../views/AdminView";
import WorkerView from "../views/WorkerView";
import ProfileView from "../views/ProfileView";
import ContactUsView from "../views/ContactUsView";
import AboutUsView from "../views/AboutUsView";
import SettingsView from "../views/SettingsView";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import ResetPassword from "../views/resetPassword";
import LoadingScreen from "./loading";
import ProductsView from "../views/ProductsView";
import ProductDetails from "../components/productDetails/ProductDetails";

import {
  checkUserAuth,
  setEmailVerification,
} from "../store/actions/authAction";
import { setAppLoading } from "../store/actions/appActions";

const Drawer = createDrawerNavigator();
const SignInDrawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NavigationView = (props) => {
  const { navigation, firebase } = props;
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

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="SignOut" onPress={() => props.firebase.signOut()} />
      </DrawerContentScrollView>
    );
  };

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Products"
        drawerContent={(props) => <CustomDrawerContent firebase={firebase} {...props} />}
      >
        <Drawer.Screen name={"Products"} component={ProductsView} />
        <Drawer.Screen name={"Admin"} component={AdminView} />
        <Drawer.Screen name={"Worker"} component={WorkerView} />
        <Drawer.Screen name={"Customer"} component={CustomerView} />
        <Drawer.Screen name={"My Profile"} component={ProfileView} />
        <Drawer.Screen name={"Contact Us"} component={ContactUsView} />
        <Drawer.Screen name={"About Us"} component={AboutUsView} />
        <Drawer.Screen name={"Reset Password"} component={ResetPassword} />
        <Drawer.Screen name={"Settings"} component={SettingsView} />
      </Drawer.Navigator>
    );
  };

  const checkUserAuthentication = async () => {
    await props.firebase.checkUserAuth((user) => {
      if (user) {
        var thisUser = props.firebase.currentUser();
        console.log("user.emailVerified :>> ", thisUser.emailVerified);
        if (!thisUser.emailVerified) {
          alert(
            "Please verify your account by clicking on the link in the email sent to your registered email address."
          );
          props.firebase.signOut();
          dispatch(setEmailVerification(false));
          return;
        }
        console.log("success");

        // if the user has previously logged in
        dispatch(setAppLoading(false));
        dispatch(checkUserAuth(true));
      } else {
        console.log("checkUserAuthentication failed user", user);
        // if the user has previously signed out from the app
        dispatch(checkUserAuth(false));
        dispatch(setAppLoading(false));
      }
    });
  };

  let {
    adminLink,
    customerLink,
    workerLink,
    contactUsLink,
    aboutUsLink,
    myProfileLink,
    resetPasswordLink,
  } = currentLanguage;

  if (isAppLoading) {
    return (
      <>
        <LoadingScreen></LoadingScreen>
      </>
    );
  }

  console.log("isUserLoggedIn :>> ", isUserLoggedIn);
  return (
    <NavigationContainer>
      {isUserLoggedIn ? (
        <>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <SignInDrawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login" component={LoginView} />
            <Drawer.Screen name="SignUp" component={SignupView} />
            <Drawer.Screen name={"Reset Password"} component={ResetPassword} />
          </SignInDrawer.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default withFirebaseHOC(NavigationView);
