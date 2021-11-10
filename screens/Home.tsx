import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text>Home</Text>
      </View>
    </ScrollView>
  );
}
