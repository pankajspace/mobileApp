import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

import GlobalStyles from "../../styles/globalStyles";
import Colors from "../../styles/colors";
import { CONSTANTS } from "../../constants/constants";
import { language } from "../../language/language";
import { changeLanguage } from "../../store/actions/appActions";

const Footer = (props) => {
  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  const dispatch = useDispatch();
  console.log("currentLanguage", currentLanguage);
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[GlobalStyles.textOpenSans, styles.footerText]}>
        {currentLanguage.contactUs}
      </Text>
      {/* <Icon
        name="arrow-back"
        color="white"
        onPress={props.onScreenChange.bind(this, CONSTANTS.CUSTOMER)}
      /> */}
      <Icon
        name="translate"
        color="white"
        onPress={() => dispatch(changeLanguage(currentLanguage.id))}
      />
      {/* <Icon
        name="arrow-forward"
        color="white"
        onPress={props.onScreenChange.bind(this, CONSTANTS.WORKER)}
      /> */}
      <Text style={[GlobalStyles.textOpenSans, styles.footerText]}>
        {currentLanguage.aboutUs}
      </Text>
    </View>
  );
};

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
