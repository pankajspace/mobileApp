import React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomerView from "../views/CustomerView";
import AdminView from "../views/AdminView";
import WorkerView from "../views/WorkerView";
import ProfileView from "../views/ProfileView";
import ContactUsView from "../views/ContactUsView";
import AboutUsView from "../views/AboutUsView";

const Drawer = createDrawerNavigator();

const NavigationView = (props) => {
  const { navigation } = props;
  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  let {
    adminLink,
    customerLink,
    workerLink,
    contactUsLink,
    aboutUsLink,
    myProfileLink,
  } = currentLanguage;
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Customer">
        <Drawer.Screen name={"Admin"} component={AdminView} />
        <Drawer.Screen name={"Customer"} component={CustomerView} />
        <Drawer.Screen name={"Worker"} component={WorkerView} />
        <Drawer.Screen name={"My Profile"} component={ProfileView} />
        <Drawer.Screen name={"Contact Us"} component={ContactUsView} />
        <Drawer.Screen name={"About Us"} component={AboutUsView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default NavigationView;
