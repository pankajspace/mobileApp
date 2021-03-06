import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// let ScreenHeight = Dimensions.get("window").height;

const SettingsView = (props) => {
  const { navigation } = props;
  const currentLanguage = useSelector((state) => state.app.currentLanguage);

  return (
    <SafeAreaView>
      <Header navigation={navigation}>{currentLanguage.settings}</Header>
      <View style={styles.container}></View>
      {/* <Footer navigation={navigation}></Footer> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  icon: {},
});

export default SettingsView;
