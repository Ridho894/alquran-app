import React from "react";
import { View, Text } from "react-native";
import { Color } from "../utils/Color";
import { Size } from "../utils/Size";

const TimeBox = () => {
  return (
    <View
      style={{
        backgroundColor: Color.green,
        borderRadius: 5,
        alignItems: "center",
      }}
    >
      <View style={{ margin: 20 }}>
        <Text style={{ color: Color.white, textAlign: "center" }}>Dzuhur</Text>
        <Text style={{ color: Color.white, textAlign: "center", fontWeight: "bold", fontSize: Size.extraLarge }}>Time</Text>
        <Text style={{ color: Color.white, textAlign: "center" }}>Alamat</Text>
      </View>
    </View>
  );
};

export default TimeBox;
