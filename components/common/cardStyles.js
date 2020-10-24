import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 300,
    borderColor: "#03DAC6",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  price: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "blue",
    textAlign: "center",
  },
  textStrike: {
    textDecorationLine: "line-through",
    color: "skyblue",
  },
  image: {
    width: 280,
    height: 280,
  },
  desc: {
    marginBottom: 5,
    maxHeight: 80,
    minHeight: 80,
    height: 80,
    overflow: "scroll",
  },
  button: {
    borderRadius: 10,
  },
});
