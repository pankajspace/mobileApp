import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { CONSTANTS } from "./constants/constants";
import CustomerScreen from "./views/CustomerScreen";
import WorkerScreen from "./views/WorkerScreen";
import { language } from "./language/language";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [appLoaded, setDataLoaded] = useState(false);
  const [screen, setScreen] = useState(CONSTANTS.CUSTOMER);
  const [currentLanguage, setLanguage] = useState(language.en);

  const handleScreenChange = (screen) => {
    setScreen(screen);
  };

  const handleLanguageChange = (selectedLanguage) => {
    currentLanguage.id == "en"
      ? setLanguage(language.hi)
      : setLanguage(language.en);
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
          <CustomerScreen
            currentLanguage={currentLanguage}
            onScreenChange={handleScreenChange}
            onLanguageChange={handleLanguageChange}
          ></CustomerScreen>
        );
      case CONSTANTS.WORKER:
        return (
          <WorkerScreen
            currentLanguage={currentLanguage}
            onScreenChange={handleScreenChange}
            onLanguageChange={handleLanguageChange}
          ></WorkerScreen>
        );
      default:
        return (
          <CustomerScreen
            currentLanguage={currentLanguage}
            onScreenChange={handleScreenChange}
            onLanguageChange={handleLanguageChange}
          ></CustomerScreen>
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
