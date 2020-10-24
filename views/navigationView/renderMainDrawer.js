import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { CustomDrawerContent } from "./CustomDrawerContent";
import ProductsView from "../ProductsView";
import CustomerView from "../CustomerView";
import AdminView from "../AdminView";
import WorkerView from "../WorkerView";
import ProfileView from "../ProfileView";
import ServicesView from "../ServicesView";
import ContactUsView from "../ContactUsView";
import AboutUsView from "../AboutUsView";
import SettingsView from "../SettingsView";
import CartView from "../CartView";
import ResetPassword from "../ResetPassword";

const Drawer = createDrawerNavigator();

export const renderMainDrawer = (firebase) => {
  return (
    <Drawer.Navigator
      initialRouteName="Services"
      drawerContent={(props) => (
        <CustomDrawerContent firebase={firebase} {...props} />
      )}
    >
      <Drawer.Screen name={"Services"} component={ServicesView} />
      <Drawer.Screen name={"Products"} component={ProductsView} />
      <Drawer.Screen name={"Cart"} component={CartView} />
      <Drawer.Screen name={"Admin"} component={AdminView} />
      <Drawer.Screen name={"Worker"} component={WorkerView} />
      <Drawer.Screen name={"Customer"} component={CustomerView} />
      <Drawer.Screen name={"My Profile"} component={ProfileView} />
      <Drawer.Screen name={"Reset Password"} component={ResetPassword} />
      <Drawer.Screen name={"Contact Us"} component={ContactUsView} />
      <Drawer.Screen name={"About Us"} component={AboutUsView} />
      <Drawer.Screen name={"Settings"} component={SettingsView} />
    </Drawer.Navigator>
  );
};
