import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { CONSTANTS } from "./constants/constants";
import CustomerView from "./views/CustomerView";
import WorkerView from "./views/WorkerView";
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
      ? setLanguage(language.mr)
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
          <CustomerView
            currentLanguage={currentLanguage}
            onScreenChange={handleScreenChange}
            onLanguageChange={handleLanguageChange}
          ></CustomerView>
        );
      case CONSTANTS.WORKER:
        return (
          <WorkerView
            currentLanguage={currentLanguage}
            onScreenChange={handleScreenChange}
            onLanguageChange={handleLanguageChange}
          ></WorkerView>
        );
      default:
        return (
          <CustomerView
            currentLanguage={currentLanguage}
            onScreenChange={handleScreenChange}
            onLanguageChange={handleLanguageChange}
          ></CustomerView>
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
