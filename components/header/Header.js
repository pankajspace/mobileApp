import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

import GlobalStyles from "../../styles/globalStyles";
import Colors from "../../styles/colors";

const Header = (props) => (
  <View style={[styles.container, props.style]}>
    <Text style={[GlobalStyles.textOpenSansBold, styles.titleText]}>
      {props.children}
    </Text>
    {/*     
    <Image
      style={styles.image}
      source={require("../../assets/img/profile.png")}
    /> 
    */}
    <Icon name="face" color="white" />
  </View>
);

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    color: "white",
  },
  container: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
  },
  image: {},
});

export default Header;
