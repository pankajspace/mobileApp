import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../header/Header";

const ProductDetails = (props) => {
  const { navigation } = props;
  const currentLanguage = useSelector((state) => state.app.currentLanguage);

  return (
    <SafeAreaView style={styles.container}>
      <Header hideMenu={true} navigation={navigation}>
        {currentLanguage.productDetails}
      </Header>
      <View style={[styles.container]}>
        <Text>Product Details</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default ProductDetails;
