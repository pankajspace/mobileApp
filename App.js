import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { CONSTANTS } from "./constants/constants";
import CustomerScreen from "./screens/CustomerScreen";
import WorkerScreen from "./screens/WorkerScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [appLoaded, setDataLoaded] = useState(false);
  const [screen, setScreen] = useState(CONSTANTS.CUSTOMER);

  const handleScreenChange = (screen) => {
    setScreen(screen);
  };

  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const renderScreen = () => {
    switch (screen) {
      case CONSTANTS.CUSTOMER:
        return (
          <CustomerScreen onScreenChange={handleScreenChange}></CustomerScreen>
        );
      case CONSTANTS.WORKER:
        return (
          <WorkerScreen onScreenChange={handleScreenChange}></WorkerScreen>
        );
      default:
        return (
          <CustomerScreen onScreenChange={handleScreenChange}></CustomerScreen>
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
