import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon, Badge } from "react-native-elements";
import { MaterialIcons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import GlobalStyles from "../../styles/globalStyles";
import { changeLanguage } from "../../store/actions/appActions";
import { styles } from "./headerStyles";

const Header = (props) => {
  const { navigation, style, children } = props;
  const cartProducts = useSelector((state) => state.productsStore.cartProducts);
  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  const dispatch = useDispatch();

  const renderMenu = () => {
    if (!props.hideMenu) {
      return (
        <SimpleLineIcons
          name="menu"
          size={24}
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
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="language"
          size={24}
          color="white"
          onPress={() => dispatch(changeLanguage(currentLanguage.id))}
        />
        <Feather
          name="shopping-cart"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Cart")}
        />
        <Badge
          status="success"
          value={cartProducts.length}
          containerStyle={styles.badge}
        />
      </View>
    </View>
  );
};

export default Header;
