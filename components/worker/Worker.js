import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const Worker = (props) => <ScrollView style={[styles.container, props.style]}></ScrollView>;

const styles = StyleSheet.create({
  container: {},
});

export default Worker;
