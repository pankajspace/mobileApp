import React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import { withFirebaseHOC } from '../firebase'
import Customer from "../components/customer/Customer";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const CustomerView = (props) => {
  console.log(props);
  const { navigation, firebase } = props;
  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}>{currentLanguage.customerWelcome}</Header>
      <Customer firebase={firebase}></Customer>
      <Footer navigation={navigation}></Footer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default withFirebaseHOC(CustomerView);
