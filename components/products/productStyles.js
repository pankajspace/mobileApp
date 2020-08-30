import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  cardContainer: {
    width: 300,
    borderColor: "#03DAC6",
    borderWidth: 2,
    borderRadius: 10,
  },
  productPrice: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "blue",
    textAlign: "center",
  },
  productDesc: {
    marginBottom: 5,
    maxHeight: 80,
    minHeight: 80,
    overflow: "scroll",
  },
  cartBtn: {
    borderRadius: 10,
  },
});
