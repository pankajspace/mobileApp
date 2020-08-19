import React from "react";
import { StyleSheet, View } from "react-native";

import Worker from "../components/worker/Worker";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { language } from "../language/language";

const WorkerScreen = (props) => (
  <View style={styles.container}>
    <Header>{language.hi.workerWelcome}</Header>
    <Worker></Worker>
    <Footer onScreenChange={props.onScreenChange}></Footer>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default WorkerScreen;
