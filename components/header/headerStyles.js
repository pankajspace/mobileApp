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
    justifyContent: "flex-end",
  },
  headerText: {
    fontSize: 16,
    color: "white",
  },
  icon: {
    marginHorizontal: 20,
  },
  badge: { position: "absolute", right: 10 },
});
