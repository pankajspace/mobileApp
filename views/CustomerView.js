import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Customer from "../components/customer/Customer";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const CustomerScreen = (props) => {
  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  return (
    <View style={styles.container}>
      <Header>{currentLanguage.customerWelcome}</Header>
      <Customer></Customer>
      <Footer></Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CustomerScreen;
