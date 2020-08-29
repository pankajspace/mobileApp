import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { changeLanguage } from "../store/actions/appActions";

const SettingsView = (props) => {
  const { navigation } = props;
  const currentLanguage = useSelector((state) => state.app.currentLanguage);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Header navigation={navigation}>{currentLanguage.settings}</Header>
      <View style={styles.container}>
        <Icon
          name="translate"
          color="cyan"
          style={styles.icon}
          onPress={() => dispatch(changeLanguage(currentLanguage.id))}
        />
      </View>
      {/* <Footer navigation={navigation}></Footer> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  icon: {},
});

export default SettingsView;
