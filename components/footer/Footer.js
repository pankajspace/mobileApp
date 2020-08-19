import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GlobalStyles from "../../styles/globalStyles";
import Colors from "../../styles/colors";

const Footer = (props) => (
  <View style={[styles.container, props.style]}>
    <Text style={[GlobalStyles.textOpenSans, styles.footerText]}>
      {"Contact Us"}
    </Text>
    <Text style={[GlobalStyles.textOpenSans, styles.footerText]}>
      {"About Us"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    position: "fixed",
    bottom: 0,
  },
  footerText: {
    fontSize: 12,
    color: "white",
  },
});

export default Footer;
