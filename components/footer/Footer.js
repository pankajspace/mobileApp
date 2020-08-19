import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import GlobalStyles from "../../styles/globalStyles";
import Colors from "../../styles/colors";
import { CONSTANTS } from "../../constants/constants";

const Footer = (props) => (
  <View style={[styles.container, props.style]}>
    <Text style={[GlobalStyles.textOpenSans, styles.footerText]}>
      {"Contact Us"}
    </Text>
    <Icon
      name="arrow-back"
      color="white"
      onPress={props.onScreenChange.bind(this, CONSTANTS.CUSTOMER)}
    />
    <Icon
      name="arrow-forward"
      color="white"
      onPress={props.onScreenChange.bind(this, CONSTANTS.WORKER)}
    />
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
