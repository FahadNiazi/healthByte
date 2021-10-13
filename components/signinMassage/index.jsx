import { View } from "native-base";
import React from "react";
import { Text } from "react-native";
import { signinMassageStyleSheet, SigninMassageStyleSheet } from "./styles";
export const SigninMassage = () => {
  return (
    <View>
      <Text style={signinMassageStyleSheet.textFonts}>
        <Text style={{ fontWeight: "bold" }}> Hello John!</Text> Here you can
        add or edit your Vital Signs. Tab on Vital Sign to edit it.
      </Text>
    </View>
  );
};
