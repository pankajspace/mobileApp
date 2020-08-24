import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { withFirebaseHOC } from '../firebase'
import CustomerView from "../views/CustomerView";
import AdminView from "../views/AdminView";
import WorkerView from "../views/WorkerView";
import ProfileView from "../views/ProfileView";
import ContactUsView from "../views/ContactUsView";
import AboutUsView from "../views/AboutUsView";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";

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

  useEffect(() => { checkUserAuthentication() }, [isUserLoggedIn,isAppLoading])

  isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="SignOut" onPress={() => alert('SignOut')} />
      </DrawerContentScrollView>
    );
  }

  const checkUserAuthentication = async () => {
    await props.firebase.checkUserAuth(user => {
      if (user) {
        console.log('success')
        // if the user has previously logged in
        dispatch(setAppLoading(false))
        dispatch(checkUserAuth(true))
      } else {
        console.log('failed', user)
        // if the user has previously signed out from the app        
        dispatch(checkUserAuth(false))
        dispatch(setAppLoading(false))
      }
    })
  }

  let {
    adminLink,
    customerLink,
    workerLink,
    contactUsLink,
    aboutUsLink,
    myProfileLink,
  } = currentLanguage;
 
  if (isAppLoading) { return (<><Text>Loading...</Text></>) }

  return (
    <NavigationContainer>
      {isUserLoggedIn ? (
        <>
          <Drawer.Navigator initialRouteName="Customer" drawerContent={props => <CustomDrawerContent {...props} />} >
            <Drawer.Screen name={adminLink} component={AdminView} />
            <Drawer.Screen name={customerLink} component={CustomerView} />
            <Drawer.Screen name={workerLink} component={WorkerView} />
            <Drawer.Screen name={myProfileLink} component={ProfileView} />
            <Drawer.Screen name={contactUsLink} component={ContactUsView} />
            <Drawer.Screen name={aboutUsLink} component={AboutUsView} />
          </Drawer.Navigator>
        </>)
        : (
          <>
            <SignInDrawer.Navigator initialRouteName="SignIn">
              <Drawer.Screen name="SignIn" component={LoginView} />
              <Drawer.Screen name="SignUp" component={SignupView} />
            </SignInDrawer.Navigator>
          </>)
      }
    </NavigationContainer>
  );

};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default withFirebaseHOC(NavigationView);
