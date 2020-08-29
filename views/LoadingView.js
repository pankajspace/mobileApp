import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const LoadingScreen = () => (
  <View style={[styles.container]}>
    <View>
      <Text>Loading...</Text>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
