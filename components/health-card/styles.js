import { StyleSheet } from "react-native";

export const healthCardStyles = StyleSheet.create({
  title: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "center",
  },
  background: {
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 30,
    borderRadius: 10,

    borderColor: "#d6d6d6",
    flex: 1,
  },
  heartRate: {
    fontSize: 25,
    color: "red",
    textAlign: "center",
  },
  heartRateReading: {
    fontSize: 10,
    color: "red",
    textAlign: "center",
    fontWeight: "900",
  },
  position: {
    position: "absolute",
  },
  position: {
    position: "relative",
    top: -33,
    left: 40,
  },
  arrowupward: {
    height: 20,
    width: 20,
    color: "white",
  },
  heartNormalRange: {
    backgroundColor: "#008080",
    padding: 10,
  },
  normalRange: {
    fontWeight: "500",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  readingResult: {
    fontWeight: "500",
    fontSize: 16,
    color: "white",
    marginLeft: 6,
  },
});
