import React from "react";
import { View, Text, Button as ButtonNativeBase } from "native-base";
import { buttonStyleSheet } from "./styles";
import { TouchableHighlight } from "react-native";

export const Button = ({ icon, name }) => {
  return (
    <TouchableHighlight
      underlayColor="white"
      onPress={() => alert("Add event handler here")}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#d6d6d6",
          borderWidth: 1,
          marginTop: 10,
        }}
      >
        <Text>{icon}</Text>
        <Text style={buttonStyleSheet.buttonText}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};
