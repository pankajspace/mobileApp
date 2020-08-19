import React from "react";
import { View, StyleSheet } from "react-native";
import GlobalStyles from "../../styles/globalStyles";

const ComponentName = (props) => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default ComponentName;
