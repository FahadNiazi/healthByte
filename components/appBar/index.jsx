import { View, Text } from "native-base";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { appBarStyles } from "./styles";
export const AppBar = () => {
  return (
    <View style={appBarStyles.container}>
      <View>
        <Entypo name="menu" size={24} color="white" />
      </View>
      <View style={appBarStyles.appBarTextontainer}>
        <View>
          <Text style={appBarStyles.primaryText}>Vital Signs</Text>
        </View>
        <View>
          <Text style={appBarStyles.secondaryText}>Edit all</Text>
        </View>
      </View>
    </View>
  );
};
