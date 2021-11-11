import React from "react";
import { View, Text, ScrollView } from "react-native";
import TimeBox from "../components/TimeBox";

export default function Home() {
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ margin: 20 }}>
        <TimeBox />
      </View>
    </ScrollView>
  );
}
