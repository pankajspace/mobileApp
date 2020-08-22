import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Worker from "../components/worker/Worker";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const WorkerScreen = (props) => {
  const currentLanguage = useSelector((state) => state.app.currentLanguage);

  return (
    <View style={styles.container}>
      <Header>{currentLanguage.workerWelcome}</Header>
      <Worker></Worker>
      <Footer></Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default WorkerScreen;
