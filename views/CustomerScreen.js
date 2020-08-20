import React from "react";
import { StyleSheet, View } from "react-native";

import Customer from "../components/customer/Customer";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const CustomerScreen = (props) => (
  <View style={styles.container}>
    <Header>{props.currentLanguage.customerWelcome}</Header>
    <Customer></Customer>
    <Footer
      onScreenChange={props.onScreenChange}
      onLanguageChange={props.onLanguageChange}
    ></Footer>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default CustomerScreen;
