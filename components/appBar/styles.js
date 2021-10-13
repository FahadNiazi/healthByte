import { StyleSheet } from "react-native";
export const appBarStyles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: "#008080",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  appBarTextontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  primaryText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  secondaryText: {
    color: "white",
    fontSize: 18,
  },
});
