import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import { CONSTANTS } from "./constants/constants";
import { language } from "./language/language";
import CustomerView from "./views/CustomerView";
import WorkerView from "./views/WorkerView";
import { appReducer } from "./store/reducers/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   );
// }

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button
        title="Go To Profile"
        onPress={() =>
          navigation.navigate("Profile", { title: "Profile Screen Title" })
        }
      />
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "yellow" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate("Home", { post: postText });
        }}
      />
    </>
  );
}

function ProfileScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function LogoTitle(props) {
  console.log("LogoTitle", props);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "#fff",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: "#fff",
        }}
      >
        Home Screen Title
      </Text>
    </View>
    // <Icon name="face" color="white" />
  );
}

const Stack = createStackNavigator();

export default function App() {
  const [appLoaded, setDataLoaded] = useState(false);
  const [screen, setScreen] = useState(CONSTANTS.CUSTOMER);
  const [currentLanguage, setLanguage] = useState(language.en);

  const handleScreenChange = (screen) => {
    setScreen(screen);
  };

  const handleLanguageChange = (selectedLanguage) => {
    currentLanguage.id == "en"
      ? setLanguage(language.mr)
      : setLanguage(language.en);
  };

  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const renderScreen = () => {
    switch (screen) {
      case CONSTANTS.CUSTOMER:
        return (
          <CustomerView
            currentLanguage={currentLanguage}
            onScreenChange={handleScreenChange}
            onLanguageChange={handleLanguageChange}
          ></CustomerView>
        );
      case CONSTANTS.WORKER:
        return (
          <WorkerView
            currentLanguage={currentLanguage}
            onScreenChange={handleScreenChange}
            onLanguageChange={handleLanguageChange}
          ></WorkerView>
        );
      default:
        return (
          <CustomerView
            currentLanguage={currentLanguage}
            onScreenChange={handleScreenChange}
            onLanguageChange={handleLanguageChange}
          ></CustomerView>
        );
    }
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {renderScreen()}
        <StatusBar style="auto" />
      </View>
    </Provider>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: "#ff0266",
    //       },
    //       headerTintColor: "#fff",
    //       headerTitleStyle: {
    //         fontWeight: "bold",
    //       },
    //     }}
    //   >
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       // options={{ title: "Home Screen Title" }}
    //       options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
    //     />
    //     <Stack.Screen
    //       name="Details"
    //       component={DetailsScreen}
    //       options={{ title: "Details Screen Title" }}
    //       initialParams={{ itemId: 42 }}
    //     />
    //     <Stack.Screen
    //       name="CreatePost"
    //       component={CreatePostScreen}
    //       options={{ title: "Create Post Title" }}
    //     />
    //     <Stack.Screen
    //       name="Profile"
    //       component={ProfileScreen}
    //       options={({ route }) => ({ title: route.params.title })}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
  },
});
