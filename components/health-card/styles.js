import { StyleSheet } from "react-native";

export const healthCardStyles = StyleSheet.create({
  title: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
  },
  background: {
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 10,
    borderColor: "#d6d6d6",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  heartRate: {
    fontSize: 25,
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
  },
  heartRateReading: {
    fontSize: 12,
    color: "red",
    textAlign: "center",
    fontWeight: "900",
  },
  position: {
    position: "relative",
    top: -13,
  },
  arrowupward: {
    height: 20,
    width: 20,
    color: "white",
  },
  heartNormalRange: {
    backgroundColor: "#008080",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
  textAlign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  textCenter: {
    justifyContent: "center",
  },
  minHeight: {
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  margin: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  flex: {
    flex: 1,
  },
});
