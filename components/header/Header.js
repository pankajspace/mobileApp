import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

import GlobalStyles from "../../styles/globalStyles";
import Colors from "../../styles/colors";

const Header = (props) => {
  const { navigation, style, children } = props;  
  return (
    <View style={[styles.container, style]}>
      <Icon
        name="menu"
        color="white"
        onPress={() => navigation.toggleDrawer()}
      />
      <Text style={[GlobalStyles.textOpenSansBold, styles.headerText]}>
        {children}
      </Text>
      {/* <Image style={styles.image} source={require("../../assets/img/profile.png")} />  */}
      <Icon
        name="face"
        color="white"
        onPress={() => navigation.navigate("My Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
  },
  headerText: {
    fontSize: 16,
    color: "white",
  },
  // image: {},
});

export default Header;
