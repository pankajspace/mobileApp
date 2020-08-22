import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import { CONSTANTS } from "./constants/constants";
import CustomerView from "./views/CustomerView";
import WorkerView from "./views/WorkerView";
import ProfileView from "./views/ProfileView";
import ContactUsView from "./views/ContactUsView";
import AboutUsView from "./views/AboutUsView";
import { appReducer } from "./store/reducers/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const Drawer = createDrawerNavigator();

export default function App() {
  const [appLoaded, setDataLoaded] = useState(false);

  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        {renderScreen()}
        <StatusBar style="auto" />
      </View> */}
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Customer">
            <Drawer.Screen name="Customer" component={CustomerView} />
            <Drawer.Screen name="Worker" component={WorkerView} />
            <Drawer.Screen name="MyProfile" component={ProfileView} />
            <Drawer.Screen name="ContactUs" component={ContactUsView} />
            <Drawer.Screen name="AboutUs" component={AboutUsView} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
