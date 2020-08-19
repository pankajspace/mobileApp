import React from "react";
import { StyleSheet, View } from "react-native";

import Customer from "../components/customer/Customer";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { language } from "../language/language";

const CustomerScreen = (props) => (
  <View style={styles.container}>
    <Header>{language.en.customerWelcome}</Header>
    <Customer></Customer>
    <Footer onScreenChange={props.onScreenChange}></Footer>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default CustomerScreen;