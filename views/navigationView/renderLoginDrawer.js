import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginView from "../LoginView";
import SignupView from "../SignupView";
import ResetPassword from "../resetPassword";

const SignInDrawer = createDrawerNavigator();

export const renderLoginDrawer = () => {
  return (
    <SignInDrawer.Navigator initialRouteName="Login">
      <SignInDrawer.Screen name="Login" component={LoginView} />
      <SignInDrawer.Screen name="SignUp" component={SignupView} />
      <SignInDrawer.Screen name="Reset Password" component={ResetPassword} />
    </SignInDrawer.Navigator>
  );
};
