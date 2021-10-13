import { Divider } from "react-native-elements";
import React from "react";
import { View, Text } from "react-native";
import { healthCardStyles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const HealthCard = ({
  header,
  readingresult,
  range,
  uppervalue,
  rangevalue,
  up,
  showArrow,
  readingColor,
  rangeIcon,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={healthCardStyles.background}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={healthCardStyles.title}>{header}</Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Feather name="edit-3" size={18} color="black" />
          </View>
        </View>

        <View>
          <Divider orientation="vertical" width={5} />
        </View>

        <View
          style={{
            minHeight: 50,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {showArrow && (
            <View>
              <AntDesign
                name={up ? "arrowup" : "arrowdown"}
                size={24}
                color={readingColor}
              />
            </View>
          )}
          <View>
            <Text
              style={{ ...healthCardStyles.heartRate, color: readingColor }}
            >
              {readingresult}
            </Text>
          </View>

          <View style={healthCardStyles.position}>
            <Text
              style={{
                ...healthCardStyles.heartRateReading,
                color: readingColor,
              }}
            >
              {uppervalue}
            </Text>
          </View>
        </View>

        <View style={healthCardStyles.heartNormalRange}>
          <Text style={healthCardStyles.normalRange}>{range}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <View>
              <AntDesign name={rangeIcon} size={20} color="white" />
            </View>
            <Text style={healthCardStyles.readingResult}>{rangevalue}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
