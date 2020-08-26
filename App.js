import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Firebase, { FirebaseProvider } from "./firebase";
import reduxThunk from "redux-thunk";

import NavigationView from "./views/NavigationView";
import { appReducer } from "./store/reducers/appReducer";
import { authReducer } from "./store/reducers/authReducer";
import { productsReducer } from "./store/reducers/productsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  productsStore: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [appLoaded, setDataLoaded] = useState(false);

  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <FirebaseProvider value={Firebase}>
        <SafeAreaProvider>
          <NavigationView></NavigationView>
        </SafeAreaProvider>
      </FirebaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
