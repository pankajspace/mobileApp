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
        <Drawer.Screen name={adminLink} component={AdminView} />
        <Drawer.Screen name={customerLink} component={CustomerView} />
        <Drawer.Screen name={workerLink} component={WorkerView} />
        <Drawer.Screen name={myProfileLink} component={ProfileView} />
        <Drawer.Screen name={contactUsLink} component={ContactUsView} />
        <Drawer.Screen name={aboutUsLink} component={AboutUsView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default NavigationView;
