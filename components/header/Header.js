import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

import GlobalStyles from "../../styles/globalStyles";
import Colors from "../../styles/colors";
import { changeLanguage } from "../../store/actions/appActions";

const Header = (props) => {
  const { navigation, style, children } = props;
  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  const dispatch = useDispatch();

  const renderMenu = () => {
    if (!props.hideMenu) {
      return (
        <Icon
          name="menu"
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      );
    } else {
      return <Text> </Text>;
    }
  };

  return (
    <View style={[styles.container, style]}>
      {renderMenu()}
      <Text style={[GlobalStyles.textOpenSansBold, styles.headerText]}>
        {children}
      </Text>
      <Icon
        name="translate"
        color="white"
        onPress={() => dispatch(changeLanguage(currentLanguage.id))}
      />
      {/* <Icon
        name="face"
        color="white"
        onPress={() => navigation.navigate("My Profile")}
      /> */}
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
