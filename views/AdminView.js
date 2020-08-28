import React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const AdminView = (props) => {
  const { navigation } = props;
  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}>{currentLanguage.admin}</Header>
      {/* <Footer navigation={navigation}></Footer> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default AdminView;
