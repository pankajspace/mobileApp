import React from "react";
import { StyleSheet, View } from "react-native";

import Worker from "../components/worker/Worker";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const WorkerScreen = (props) => (
  <View style={styles.container}>
    <Header>{props.currentLanguage.workerWelcome}</Header>
    <Worker></Worker>
    <Footer
      onScreenChange={props.onScreenChange}
      onLanguageChange={props.onLanguageChange}
    ></Footer>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default WorkerScreen;
