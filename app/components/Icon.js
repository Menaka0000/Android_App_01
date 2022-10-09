import React from "react";
import { View } from "react-native";

function Icon({
  size = 40,
  backgroundColor = "#000"
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
    </View>
  );
}

export default Icon;
