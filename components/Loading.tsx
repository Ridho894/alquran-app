import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Color } from "../utils/Color";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={Color.darkRed} />
    </View>
  );
};

export default Loading;
