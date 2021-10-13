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
    <View style={healthCardStyles.flex}>
      <View style={healthCardStyles.background}>
        <View style={healthCardStyles.textAlign}>
          <View style={healthCardStyles.flex}>
            <Text style={healthCardStyles.title}>{header}</Text>
          </View>
          <View style={healthCardStyles.textCenter}>
            <Feather name="edit-3" size={18} color="black" />
          </View>
        </View>

        <View>
          <Divider orientation="vertical" width={5} />
        </View>

        <View style={healthCardStyles.minHeight}>
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
          <View style={healthCardStyles.margin}>
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
