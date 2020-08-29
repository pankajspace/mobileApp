import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon, Badge } from "react-native-elements";
import { useSelector } from "react-redux";

import GlobalStyles from "../../styles/globalStyles";
import Colors from "../../styles/colors";

const Header = (props) => {
  const { navigation, style, children } = props;
  const cartProducts = useSelector((state) => state.productsStore.cartProducts);

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
      <Icon type="fontawesome" name="shopping-cart" color="white" solid="false" />
      <Badge
        status="success"
        value={cartProducts.length}
        containerStyle={{ position: "absolute", top: 10, right: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    padding: 15,
  },
  headerText: {
    fontSize: 16,
    color: "white",
  },
  // image: {},
});

export default Header;
