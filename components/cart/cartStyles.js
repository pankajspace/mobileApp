import { StyleSheet } from "react-native";

import Colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "stretch",
  },
  item: {
    borderWidth: 1,
    borderColor: "#03DAC6",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {},
  deleteIcon: {},
  quantityText: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
  },
  text: {
    color: Colors.primary,
    fontSize: 18,
  },
  itemName: {
    color: "#017374",
    // paddingBottom: 2,
    marginBottom: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: "#017374",
  },
  orderText: { textAlign: "center" },
  orderBtn: {},
  itemTotalPrice: {
    // width: 100,
    alignSelf: "flex-start",
  },
  marginHorizontal_20: { marginHorizontal: 20 },
});
