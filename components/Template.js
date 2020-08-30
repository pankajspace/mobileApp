import React from "react";
import { View, StyleSheet } from "react-native";

const ComponentName = (props) => (
  <View style={[styles.container, props.style]}></View>
);

const styles = StyleSheet.create({
  container: {},
});

export default ComponentName;
