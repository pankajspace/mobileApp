import { StyleSheet } from "react-native";

import Colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    padding: 15,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 70,
  },
  headerText: {
    fontSize: 16,
    color: "white",
  },
  icon: {
    // marginHorizontal: 50,
    // width: 30,
  },
  badge: { position: "absolute", right: -10 },
});
