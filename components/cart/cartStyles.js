import { StyleSheet } from "react-native";

import Colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#03DAC6",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    // backgroundColor: "lightgrey",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 20,
  },
  quantityText: {
    width: 30,
  },
  text: {
    color: Colors.primary,
    fontSize: 18,
  },
  orderBtn: {},
});
