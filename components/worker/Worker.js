import React from "react";
import { View, StyleSheet } from "react-native";

const Worker = (props) => (
  <View style={[styles.container, props.style]}></View>
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default Worker;
