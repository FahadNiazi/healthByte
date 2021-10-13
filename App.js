import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppBar } from "./components/appBar";
import { Button } from "./components/button";
import { HealthCard } from "./components/health-card";
import { SigninMassage } from "./components/signinMassage";
import { AntDesign, Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native";
const data = [
  {
    header: "Heart Rates",
    range: "Normal Range",
    rangevalue: "60-70 BMP",
    readingresult: "100",
    uppervalue: "BMP",
  },
  {
    header: "Oxygen Saturation",
    range: "Normal Range",
    rangevalue: "90-95 %",
    readingresult: "85",
    uppervalue: "%",
  },
  {
    header: "Blood Pressure",
    range: "Normal Range",
    rangevalue: "90-120 mm HG",
    readingresult: "90-120 ",
    uppervalue: "mm hg",
  },
  {
    header: "Body Temperature",
    range: "Normal Range",
    rangevalue: "36-38 ℃",
    readingresult: "37.5℃",
  },
  {
    header: "Respiration Rates",
    range: "Normal Range",
    rangevalue: "16 BMP",
    readingresult: "100",
    uppervalue: "BPM",
  },
  {
    header: "EKG",
    range: "Normal Range",
    rangevalue: "36-38 ℃",
    readingresult: "80-100",
    uppervalue: "ms",
  },
];
export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AppBar />
        <View style={{ width: "100%", padding: 20 }}>
          <SigninMassage />
          <ScrollView
            style={{
              height: 400,
              width: "100%",
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {data.map((item, index) => (
                <View style={{ width: "49%" }}>
                  <HealthCard
                    header={item.header}
                    range={item.range}
                    rangevalue={item.rangevalue}
                    readingresult={item.readingresult}
                    uppervalue={item.uppervalue}
                  />
                </View>
              ))}
            </View>
          </ScrollView>

          <Button
            name="Add Another Vital Sign"
            icon={<AntDesign name="plus" size={24} color="black" />}
          />
          <Button
            name="Invite pepole to view your vital sign"
            icon={<Feather name="send" size={24} color="black" />}
          />
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
