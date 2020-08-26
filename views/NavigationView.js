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
import { withFirebaseHOC } from "../firebase";
import CustomerView from "../views/CustomerView";
import AdminView from "../views/AdminView";
import WorkerView from "../views/WorkerView";
import ProfileView from "../views/ProfileView";
import ContactUsView from "../views/ContactUsView";
import AboutUsView from "../views/AboutUsView";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import ProductsView from "../views/ProductsView";

import { checkUserAuth } from "../store/actions/authAction";
import { setAppLoading } from "../store/actions/appActions";

const Drawer = createDrawerNavigator();
const SignInDrawer = createDrawerNavigator();
const NavigationView = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  let isUserLoggedIn = false;

  const isAppLoading = useSelector((state) => state.app.isAppLoading);

  useEffect(() => {
    checkUserAuthentication();
  }, [isUserLoggedIn, isAppLoading]);

  isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="SignOut" onPress={() => alert("SignOut")} />
      </DrawerContentScrollView>
    );
  };

  const checkUserAuthentication = async () => {
    await props.firebase.checkUserAuth((user) => {
      if (user) {
        console.log("checkUserAuthentication success");
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
  } = currentLanguage;

  if (isAppLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isUserLoggedIn ? (
        <>
          <Drawer.Navigator
            initialRouteName="Products"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <Drawer.Screen name={"Products"} component={ProductsView} />
            <Drawer.Screen name={"Admin"} component={AdminView} />
            {/* <Drawer.Screen name={"Customer"} component={CustomerView} /> */}
            <Drawer.Screen name={"Worker"} component={WorkerView} />
            <Drawer.Screen name={"My Profile"} component={ProfileView} />
            <Drawer.Screen name={"Contact Us"} component={ContactUsView} />
            <Drawer.Screen name={"About Us"} component={AboutUsView} />
          </Drawer.Navigator>
        </>
      ) : (
        <>
          <SignInDrawer.Navigator initialRouteName="SignIn">
            <Drawer.Screen name="SignIn" component={LoginView} />
            <Drawer.Screen name="SignUp" component={SignupView} />
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
