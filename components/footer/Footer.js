import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

import GlobalStyles from "../../styles/globalStyles";
import Colors from "../../styles/colors";
import { changeLanguage } from "../../store/actions/appActions";

const Footer = (props) => {
  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  const dispatch = useDispatch();
  console.log("currentLanguage", currentLanguage);
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[GlobalStyles.textOpenSans, styles.footerText]}>&copy;</Text>
      <Icon
        name="translate"
        color="white"
        onPress={() => dispatch(changeLanguage(currentLanguage.id))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 10,
  },
  footerText: {
    fontSize: 22,
    color: "white",
  },
});

export default Footer;
